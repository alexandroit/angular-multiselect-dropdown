import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { validateRelease } from '../../../../../tools/stackline-run-release-smoke.mjs';

const releaseRoot = path.dirname(fileURLToPath(import.meta.url));
await validateRelease(releaseRoot);
