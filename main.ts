import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Serendipity";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
