import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one funny line, 74 characters, plain ASCII.
const JOKE =
  "I asked an AI to write my wedding vows. It said, 'I can't commit to that.'";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  console.error(`entry is ${JOKE.length} characters; gate needs 1-200`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the entry file is exactly the joke, nothing else.
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length}-character entry to ${join(outDir, "entry.txt")}`);
