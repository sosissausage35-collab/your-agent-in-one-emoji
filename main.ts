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

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🧭"; // U+1F9ED COMPASS

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
