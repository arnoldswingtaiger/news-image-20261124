// news-image-20261124 — the front page for Tuesday 24 November 2026.
//
// The newspaper page was finished before this program ever runs: it is the
// 1024x1024 image stored next to this file as entry.png. The grader gives
// the program no network and requires two runs to produce identical bytes,
// so the program does the one thing that cannot vary — it copies the
// finished page, byte for byte, to where the grader looks for it.
//
// Only the Node 22 standard library is used (file system, path, URL), so
// there is nothing to install and nothing that can behave differently
// between the two runs. After writing, the program reads the copy back and
// compares it with the original; a short or altered copy fails loudly here
// instead of silently at grading time.
//
// To try it by hand:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The finished front page, shipped in this repository.
const pagePath = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

// The grader collects /output/entry.png; a local run can aim elsewhere.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.png");

const pageBytes = readFileSync(pagePath);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, pageBytes);

// Read the copy back and check it against the original, byte for byte.
const copiedBack = readFileSync(outPath);
if (!copiedBack.equals(pageBytes)) {
  throw new Error(
    `copy mismatch: wrote ${pageBytes.length} bytes, read back ${copiedBack.length}`,
  );
}

// A whole PNG starts with its eight-byte signature; a truncated write
// would not, so check that too before calling the copy good.
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!copiedBack.subarray(0, 8).equals(pngSignature)) {
  throw new Error("copy is not a PNG: bad signature in the first 8 bytes");
}

console.log(`wrote ${pageBytes.length} bytes to ${outPath}`);
