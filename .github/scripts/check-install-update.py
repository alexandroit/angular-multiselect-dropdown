"""Check normal install/update and every audit severity for a packed release."""
import json
import os
import pathlib
import subprocess
import sys
import tarfile
import tempfile

archive = pathlib.Path(sys.argv[1]).resolve()
with tarfile.open(archive) as package:
    manifest = json.load(package.extractfile('package/package.json'))
name, version = manifest['name'], manifest['version']
assert name.startswith('@stackline/')
frameworks = {
    '@angular/core': '22.2.4', '@angular/common': '22.2.4',
    '@angular/compiler': '22.2.4', '@angular/forms': '22.2.4',
    'react': '19.3.1', 'react-dom': '19.3.1', 'vue': '3.5.44',
    'highcharts': '13.1.1',
}
peers = {key: frameworks[key] for key in manifest.get('peerDependencies', {}) if key in frameworks}
if '@angular/core' in peers:
    peers['@angular/compiler'] = frameworks['@angular/compiler']
with tempfile.TemporaryDirectory(prefix='stackline-install-update-', dir=os.environ.get('RUNNER_TEMP') or os.environ.get('TMPDIR')) as tmp:
    for key in (name, 'upstream-package'):
        cwd = pathlib.Path(tmp) / ('direct' if key == name else 'alias')
        cwd.mkdir()
        (cwd / 'package.json').write_text(json.dumps({'name': 'release-consumer', 'version': '1.0.0', 'private': True, 'dependencies': {key: 'file:' + str(archive), **peers}}))
        for action in ('install', 'update'):
            subprocess.run(['npm', action, '--no-fund'], cwd=cwd, check=True)
            result = subprocess.run(['npm', 'audit', '--json'], cwd=cwd, text=True, capture_output=True)
            audit = json.loads(result.stdout)
            assert result.returncode == 0 and audit['metadata']['vulnerabilities']['total'] == 0, audit
            installed = json.loads((cwd / 'node_modules' / key / 'package.json').read_text())
            assert (installed['name'], installed['version']) == (name, version)
            subprocess.run(['npm', 'ls', '--all'], cwd=cwd, check=True, stdout=subprocess.DEVNULL)
            print(f'{name}@{version} {key} npm {action}: 0 known vulnerabilities', flush=True)
