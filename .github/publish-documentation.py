from pathlib import Path
import base64,hashlib,json,os,subprocess,sys,tempfile,time,urllib.request,urllib.error,urllib.parse
PLAN=json.loads(Path('.github/documentation-release.json').read_text());REPO=os.environ['GITHUB_REPOSITORY'];SHA=os.environ['GITHUB_SHA'];REF=os.environ['GITHUB_REF'];RUN=f"https://github.com/{REPO}/actions/runs/{os.environ['GITHUB_RUN_ID']}/attempts/{os.environ['GITHUB_RUN_ATTEMPT']}"
assert PLAN['repository']==REPO and REPO!='alexandroit/sheetjs'
def get(url):
 assert url.startswith(('https://registry.npmjs.org/','https://registry.npmjs.org%2f'))
 for n in range(120):
  try:
   with urllib.request.urlopen(url,timeout=60) as r:return r.read()
  except urllib.error.HTTPError as e:
   if e.code not in (404,429,502,503) or n==119:raise
   time.sleep(5)
def gh(path,method='GET',data=None):
 args=['gh','api',f'repos/{REPO}/'+path,'--method',method]
 if data is not None:args+=['--input','-']
 return json.loads(subprocess.check_output(args,input=json.dumps(data) if data is not None else None,text=True))
for p in PLAN['packages']:
 archive=Path('artifact')/(p['name'].replace('@','').replace('/','-')+'-'+p['version']+'.tgz');raw=archive.read_bytes();assert hashlib.sha512(raw).hexdigest()==p['expectedSha512']
 url='https://registry.npmjs.org/'+urllib.parse.quote(p['name'],safe='')+'/'+p['version']
 try:
  with urllib.request.urlopen(url,timeout=30) as response:already=json.load(response)
 except urllib.error.HTTPError as e:
  assert e.code==404
  subprocess.run(['npm','publish',str(archive.resolve()),'--access','public','--provenance','--ignore-scripts','--tag','latest'],check=True)
 else:assert already['dist']['integrity']=='sha512-'+base64.b64encode(hashlib.sha512(raw).digest()).decode(),'Existing version has different bytes'
 metadata=json.loads(get(url));assert metadata['name']==p['name'] and metadata['version']==p['version'] and not metadata.get('deprecated');assert metadata['keywords']==p['keywords'] and metadata['homepage']==p['homepage'];assert metadata['dist']['signatures'];assert get(metadata['dist']['tarball'])==raw
 packument=json.loads(get('https://registry.npmjs.org/'+urllib.parse.quote(p['name'],safe='')));assert packument['dist-tags']['latest']==p['version'];assert packument['readme']==Path(p['path']).read_text()
 att=json.loads(get(metadata['dist']['attestations']['url']));entries=[x for x in att['attestations'] if x['predicateType']=='https://slsa.dev/provenance/v1'];assert len(entries)==1
 statement=json.loads(base64.b64decode(entries[0]['bundle']['dsseEnvelope']['payload']));assert statement['subject']==[{'name':'pkg:npm/'+(p['name']+'@'+p['version']).replace('@','%40',1) if p['name'].startswith('@') else 'pkg:npm/'+p['name']+'@'+p['version'],'digest':{'sha512':p['expectedSha512']}}]
 definition=statement['predicate']['buildDefinition'];assert definition['externalParameters']['workflow']=={'ref':REF,'repository':'https://github.com/'+REPO,'path':'.github/workflows/documentation-release.yml'};assert definition['internalParameters']['github']['event_name']=='push'
 deps=[x for x in definition['resolvedDependencies'] if x['uri']==f'git+https://github.com/{REPO}@{REF}'];assert len(deps)==1 and deps[0]['digest']['gitCommit']==SHA
 invocation=statement['predicate']['runDetails']['metadata']['invocationId'];assert invocation.rsplit('/attempts/',1)[0]==RUN.rsplit('/attempts/',1)[0]
 with tempfile.TemporaryDirectory() as tmp:
  d=Path(tmp);(d/'package.json').write_text(json.dumps({'name':'documentation-release-consumer','private':True,'version':'1.0.0','dependencies':{p['name']:p['version']}}))
  subprocess.run(['npm','install','--ignore-scripts','--legacy-peer-deps','--omit=dev','--no-audit','--no-fund'],cwd=d,check=True)
  locked=json.loads((d/'package-lock.json').read_text())['packages']['node_modules/'+p['name']];assert locked['integrity']==metadata['dist']['integrity']
  # Verify signatures/provenance without executing any unchanged package lifecycle scripts.
  subprocess.run(['npm','audit','signatures','--omit=dev'],cwd=d,check=True)
 evidence=json.loads(archive.with_suffix('.json').read_text());evidence.update(sourceCommit=SHA,sourceRef=REF,publicationRun=invocation,dist=metadata['dist'],consumerInstall='PASS (lifecycle scripts disabled)',provenance='PASS',status='PASS');evidencefile=archive.with_suffix('.verification.json');evidencefile.write_text(json.dumps(evidence,indent=2)+'\n')
 gh('git/refs','POST',{'ref':'refs/tags/'+p['tag'],'sha':SHA})
 notes=f"Documentation and package discovery update for `{p['name']}@{p['version']}`.\n\nUses the published `{p['baselineVersion']}` tarball as the baseline. Only the README and package version, keywords and homepage changed. All other {evidence['unchangedFiles']} file contents are identical; runtime/development dependencies, original authors and license are preserved.\n\n[Documentation]({p['homepage']}) · [Publication evidence]({invocation})\n\nSHA-512: `{p['expectedSha512']}`"
 release=gh('releases','POST',{'tag_name':p['tag'],'name':p['name']+' '+p['version'],'body':notes,'draft':True})
 subprocess.run(['gh','release','upload',p['tag'],str(archive),str(evidencefile),'--repo',REPO],check=True)
 release=gh('releases/'+str(release['id']),'PATCH',{'draft':False,'make_latest':'true'});assert release.get('immutable') is True
 release=gh('releases/tags/'+p['tag']);assert release['immutable'] is True and not release['draft']
 for asset in release['assets']:
  f=archive.parent/asset['name'];assert asset['digest']=='sha256:'+hashlib.sha256(f.read_bytes()).hexdigest()
 print(json.dumps({'package':p['name'],'version':p['version'],'release':release['html_url'],'status':'PASS'}),flush=True)
