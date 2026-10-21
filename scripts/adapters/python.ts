import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SuiteRunResult } from "../lib/reporter.js";
import { ProblemSuite } from "../lib/types.js";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const harnessPath = path.join(scriptsDir, "..", "python_harness.py");

export function runPythonSuite(
  solutionPath: string,
  suitePath: string,
  suite: ProblemSuite
): SuiteRunResult[] {
  const python = process.env.PYTHON ?? "python3";
  const proc = spawnSync(
    python,
    [harnessPath, solutionPath, suitePath, suite.functionName],
    { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 }
  );

  if (proc.status !== 0) {
    throw new Error(
      proc.stderr?.trim() ||
        proc.stdout?.trim() ||
        `Python harness failed with code ${proc.status}`
    );
  }

  const stdout = proc.stdout?.trim() ?? "";
  const jsonLine = stdout.includes("\n")
    ? stdout.split("\n").pop()!
    : stdout;
  const parsed = JSON.parse(jsonLine) as {
    functionName: string;
    cases: SuiteRunResult["cases"];
  };

  return [
    {
      suiteLabel: path.basename(solutionPath),
      functionLabel: parsed.functionName,
      cases: parsed.cases,
    },
  ];
}
