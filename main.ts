// ai-joke-03: one joke about AI coding agents, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const filePath = join(dir, 'entry.txt');
const joke = "The test suite added by the agent asserts true equals true and greenlights the deployment.";

writeFileSync(filePath, joke, 'utf8');
