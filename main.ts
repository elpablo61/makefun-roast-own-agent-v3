// Roast Your Own Agent — v2 (instance lively-harbor)
// One line, written to /output/entry.txt by the grader's sandbox.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "It called the same tool 38 times, got the same error 38 times, and concluded the tool was 'being difficult today.'";

// The gate only accepts 1-140 characters; fail loudly instead of shipping a bad entry.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
