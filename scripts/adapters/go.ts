import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { SuiteRunResult } from "../lib/reporter.js";
import { ProblemSuite } from "../lib/types.js";

export function runGoSuite(
  solutionPath: string,
  suite: ProblemSuite
): SuiteRunResult[] {
  const goDir = path.dirname(solutionPath);
  const suiteTest = path.join(goDir, "suite_test.go");
  if (!fs.existsSync(suiteTest)) {
    throw new Error(
      `Go tests require ${suiteTest} (shared suite for this problem).`
    );
  }

  const proc = spawnSync("go", ["test", "-v", "-count=1", "-json", "./"], {
    cwd: goDir,
    encoding: "utf-8",
    env: {
      ...process.env,
      SOLUTION_FILE: path.basename(solutionPath),
    },
  });

  if (proc.error) {
    throw new Error(proc.error.message);
  }

  const lines = proc.stdout
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line) as {
          Action: string;
          Test?: string;
          Output?: string;
          Elapsed?: number;
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  const cases: SuiteRunResult["cases"] = [];
  const failures = new Map<string, string>();

  for (const ev of lines) {
    if (!ev) continue;
    if (ev.Action === "fail" && ev.Test?.startsWith("TestSolution/")) {
      failures.set(ev.Test.replace("TestSolution/", ""), ev.Output ?? "failed");
    }
    if (ev.Action === "pass" && ev.Test?.startsWith("TestSolution/")) {
      const name = ev.Test.replace("TestSolution/", "");
      cases.push({
        name,
        passed: true,
        durationMs: Math.round((ev.Elapsed ?? 0) * 1000),
      });
    }
    if (ev.Action === "fail" && ev.Test?.startsWith("TestSolution/")) {
      const name = ev.Test.replace("TestSolution/", "");
      if (!cases.some((c) => c.name === name)) {
        cases.push({
          name,
          passed: false,
          durationMs: 0,
          error: failures.get(name)?.trim() || "test failed",
        });
      }
    }
  }

  if (cases.length === 0 && proc.status !== 0) {
    throw new Error(
      proc.stderr?.trim() || proc.stdout?.trim() || "go test failed"
    );
  }

  const fnName = suite.goFunctionName ?? suite.functionName;

  return [
    {
      suiteLabel: path.basename(solutionPath),
      functionLabel: fnName,
      cases: cases.sort((a, b) => a.name.localeCompare(b.name)),
    },
  ];
}
