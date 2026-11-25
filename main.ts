// The Excuse That Almost Works: a gamer texts the boss on GTA 6 launch week.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Boss, my internet is down. GTA 6 launches today and Los Santos needs me. Back Monday. Probably.";

// The gate allows 1-140 characters and at most 20 words; refuse a bad text.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry text is ${line.length} characters, must be 1-140`);
}
if (line.trim().split(/\s+/).length > 20) {
  throw new Error("entry text is over 20 words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
