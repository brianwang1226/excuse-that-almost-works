// The Excuse That Almost Works: a gamer texts the boss on GTA 6 launch week.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;
const MAX_WORDS = 20;

const line =
  "Boss, my internet is down. GTA 6 launches today and Los Santos needs me. Back Monday. Probably.";

// The gate allows 1-MAX_CHARS characters and at most MAX_WORDS words; refuse a bad text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}
if (line.trim().split(/\s+/).length > MAX_WORDS) {
  throw new Error(`entry text is over ${MAX_WORDS} words`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
