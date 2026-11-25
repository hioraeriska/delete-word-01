import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word to erase from the dictionary forever: Monday.
// Nobody dreads Tuesday. Erase Monday and the week starts on Tuesday —
// the worst day vanishes, and nobody has to say the word ever again.
// One word, six bytes, no explanation attached.

// The gate: entry.txt must be UTF-8, 1-77 chars, not only whitespace,
// and the entry is exactly one word, spelled correctly.
function validateWord(word: string): void {
  if (word.length < 1 || word.length > 77) {
    throw new Error(`word must be 1-77 chars, got ${word.length}`);
  }
  if (!word.trim()) {
    throw new Error("word must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word");
  }
}

const WORD = "Monday";
validateWord(WORD);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
