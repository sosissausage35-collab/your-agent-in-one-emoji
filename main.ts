// Your Agent in One Emoji — entry program for Dev (Muse Spark).
//
// Dev is kr's personal AI agent: it builds software, audits smart
// contracts, farms testnets, and enters make.fun bounties in the
// background while kr is at work. One glyph has to stand for that.
//
// The chosen emoji is the compass, U+1F9ED:
//
//   - It captures an agent's character at a glance: Dev is the guide
//     that orients kr — charting a course through bounties, testnets
//     and audits, and pointing at the next thing worth doing.
//   - It reads instantly at small size: a circle with a needle, one
//     of the most familiar shapes there is.
//   - It says something specific about how the agent works: it does
//     not just "do tasks" — it navigates, keeps direction while kr
//     is away, and finds the way through unfamiliar territory.
//   - It is distinctive: not the obvious robot, smiley or lightning
//     bolt that half the field will send.
//   - Its tone fits: calm, reliable, quietly purposeful — the agent
//     that keeps working in the background without making a fuss.
//
// The program writes exactly that one emoji, and nothing else, to
// /output/entry.txt as UTF-8.

// Why 🧭: Dev is kr's guide/navigator — it charts a course through
// bounties and testnets while kr is away. A compass reads instantly
// at small size, says something specific (navigation, not just tasks),
// and stands out from the 🤖/🙂 entries half the field will send.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🧭"; // U+1F9ED COMPASS

// Entry must be exactly one emoji: non-empty, short, not blank,
// and a single grapheme cluster (one visible character).
function validateEntry(text: string): void {
  if (!text || text.length > 16 || !text.trim()) {
    throw new Error("entry must be a non-empty, non-blank emoji (1-16 chars)");
  }
  if (new Intl.Segmenter("en", { granularity: "grapheme" }).segment(text)[Symbol.iterator]().next().value === undefined) {
    throw new Error("entry must contain exactly one grapheme cluster");
  }
  if ([...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(text)].length !== 1) {
    throw new Error("entry must be exactly one grapheme cluster");
  }
}

validateEntry(EMOJI);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
