import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function render() {
  if (!existsSync(join(import.meta.dirname, 'entry.jpg'))) throw new Error('entry.jpg is missing');
  mkdirSync(out, { recursive: true });
  copyFileSync(join(import.meta.dirname, 'entry.jpg'), join(out, 'entry.jpg'));
}

render();
