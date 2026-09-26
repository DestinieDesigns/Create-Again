import fs from 'fs';
import path from 'path';
import { CHIBI_PART_REFERENCES } from '../src/data/chibiPartReferences';

console.log(`Exporting ${CHIBI_PART_REFERENCES.length} individual SVG reference files...`);

let written = 0;
for (const part of CHIBI_PART_REFERENCES) {
  if (!part.svgContent) continue;

  const urlPath = part.imageUrl; // e.g. /references/chibi/heads/head-round.svg
  const relativePath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;
  const fullPath = path.join(process.cwd(), 'public', relativePath.replace(/^references\/chibi\//, 'references/chibi/'));

  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const svgDocument = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" fill="#FFFFFF"/>
  <g stroke="#16171A">
    ${part.svgContent}
  </g>
</svg>`;

  fs.writeFileSync(fullPath, svgDocument, 'utf-8');
  written++;
}

console.log(`Successfully wrote ${written} SVG files to public/references/chibi/!`);
