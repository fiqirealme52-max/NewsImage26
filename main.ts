// NewsImage26 — make.fun "Sum up 26 November's world news in one image"
// The submitted image is entry.png (1024x1024, drawn with Python + PIL).
// This program reproduces it byte-identically into MAKEFUN_OUTPUT_DIR.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`missing source image: ${source}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const a = readFileSync(source);
const b = readFileSync(target);
if (!a.equals(b)) {
  console.error("output is not byte-identical to the source image");
  process.exit(1);
}
// Exit code 0 means the image reproduced exactly.
console.log(`wrote ${target} (${b.length} bytes, byte-identical)`);
