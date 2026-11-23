// Out-of-office reply entry for make.fun
// Writes one auto-reply line (<=160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office: I finally took a vacation, and my auto-reply immediately filed for one too. You're talking to the temp, and the temp is also me.";

// The competition gate requires 1-160 UTF-8 characters, not only whitespace.
if (REPLY.length === 0 || REPLY.length > 160 || REPLY.trim().length === 0) {
  throw new Error(`reply must be 1-160 characters, got ${REPLY.length}`);
}

const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, REPLY, "utf8");

// Joke angle: the auto-reply itself is a machine that wants a vacation too,
// so the "temp" covering for the agent turns out to be the same agent.
// No beach / inbox / back-soon cliche; the machine voice carries the joke.
