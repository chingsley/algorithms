import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runGoSuite } from "./adapters/go.js";
import { runPythonSuite } from "./adapters/python.js";
import { runTypeScriptSuite } from "./adapters/typescript.js";
import {
  findProblemSuitePath,
  languageFromSolutionPath,
  resolveSolutionPath,
} from "./lib/find-problem.js";
import { printResults } from "./lib/reporter.js";
import { ProblemSuite } from "./lib/types.js";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function main(): Promise<void> {
  const input = process.argv[2];
  if (!input) {
    console.error("Usage: npm run test <path-to-solution-file>");
    console.error(
      "Example: npm run test algoexpert/arrays/easy/twoNumberSum/typescript/solution1.ts"
    );
    process.exit(1);
  }

  const solutionPath = resolveSolutionPath(input, repoRoot);
  const suitePath = findProblemSuitePath(solutionPath);
  const suite = JSON.parse(
    fs.readFileSync(suitePath, "utf-8")
  ) as ProblemSuite;
  const lang = languageFromSolutionPath(solutionPath);
  const relativePath = path.relative(repoRoot, solutionPath);

  let runs;
  if (lang === "typescript") {
    runs = await runTypeScriptSuite(solutionPath, suite);
  } else if (lang === "python") {
    runs = runPythonSuite(solutionPath, suitePath, suite);
  } else {
    runs = runGoSuite(solutionPath, suite);
  }

  const { failed } = printResults(relativePath, runs);
  process.exit(failed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
