"""Documentation-only release: retain every published runtime byte and metadata contract."""
from pathlib import Path
import base64,gzip,hashlib,io,json,re,tarfile,urllib.request
ALLOWED={'version','keywords','homepage'}
def build(p,readme,baseline,out):
 assert p['name']!='@stackline/xlsx'
 assert 'sha512-'+base64.b64encode(hashlib.sha512(baseline).digest()).decode()==p['baselineIntegrity']
 with tarfile.open(fileobj=io.BytesIO(baseline),mode='r:gz') as t:
  members=t.getmembers();assert len({m.name for m in members})==len(members),'duplicate tar entries'
  data={m.name:t.extractfile(m).read() for m in members if m.isfile()}
  old=json.loads(data['package/package.json']);assert old['name']==p['name'] and old['version']==p['baselineVersion']
  updated=dict(old);updated.update(version=p['version'],keywords=p['keywords'],homepage=p['homepage'])
  assert {k:v for k,v in old.items() if k not in ALLOWED}=={k:v for k,v in updated.items() if k not in ALLOWED}
  changed={'package/package.json'};newdata=dict(data);newdata['package/package.json']=(json.dumps(updated,indent=2,ensure_ascii=False)+'\n').encode()
  for m in members:
   if re.fullmatch(r'package/readme(?:\.md|\.markdown|\.txt)?',m.name,re.I):
    assert m.isfile();newdata[m.name]=readme;changed.add(m.name)
  if len(changed)==1:
   name='package/README.md';m=tarfile.TarInfo(name);m.mode=0o644;m.mtime=0;members.append(m);newdata[name]=readme;changed.add(name)
  out=Path(out);out.parent.mkdir(parents=True,exist_ok=True)
  with out.open('wb') as raw:
   with gzip.GzipFile(filename='',mode='wb',fileobj=raw,mtime=0) as z:
    with tarfile.open(fileobj=z,mode='w',format=tarfile.PAX_FORMAT) as dest:
     for m in members:
      if m.isfile():m.size=len(newdata[m.name]);dest.addfile(m,io.BytesIO(newdata[m.name]))
      else:dest.addfile(m)
 with tarfile.open(out) as t:
  for m in t:
   if m.isfile() and m.name not in changed:assert t.extractfile(m).read()==data[m.name]
 digest=hashlib.sha512(out.read_bytes()).hexdigest()
 return {'name':p['name'],'version':p['version'],'baselineVersion':p['baselineVersion'],'baselineIntegrity':p['baselineIntegrity'],'changedFiles':sorted(changed),'unchangedFiles':len(data)-len([x for x in changed if x in data]),'sha512':digest,'integrity':'sha512-'+base64.b64encode(bytes.fromhex(digest)).decode(),'readmeSha256':hashlib.sha256(readme).hexdigest(),'status':'PASS'}
if __name__=='__main__':
 import sys
 plan=json.loads(Path(sys.argv[1]).read_text());out=Path(sys.argv[2]);out.mkdir(exist_ok=True)
 for p in plan['packages']:
  with urllib.request.urlopen(p['baselineTarball'],timeout=90) as response:baseline=response.read()
  archive=out/(p['name'].replace('@','').replace('/','-')+'-'+p['version']+'.tgz')
  report=build(p,Path(p['path']).read_bytes(),baseline,archive)
  if p.get('expectedSha512'):assert report['sha512']==p['expectedSha512'],'Reviewed artifact digest mismatch'
  (out/(archive.stem+'.json')).write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
