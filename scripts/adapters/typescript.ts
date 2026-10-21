import path from "node:path";
import { pathToFileURL } from "node:url";
import { deepCloneArgs } from "../lib/clone.js";
import { valuesMatch } from "../lib/match.js";
import { CaseResult, SuiteRunResult } from "../lib/reporter.js";
import { ProblemSuite } from "../lib/types.js";

function solutionExports(
  mod: Record<string, unknown>,
  functionName: string
): string[] {
  return Object.keys(mod).filter(
    (key) =>
      key !== "default" &&
      typeof mod[key] === "function" &&
      (key === functionName || key.startsWith(functionName))
  );
}

export async function runTypeScriptSuite(
  solutionPath: string,
  suite: ProblemSuite
): Promise<SuiteRunResult[]> {
  const mod = (await import(pathToFileURL(solutionPath).href)) as Record<
    string,
    unknown
  >;
  const exportNames = solutionExports(mod, suite.functionName);
  if (exportNames.length === 0) {
    throw new Error(
      `No exported functions matching "${suite.functionName}" in ${solutionPath}`
    );
  }

  return exportNames.map((exportName) => {
    const fn = mod[exportName] as (...args: unknown[]) => unknown;
    const cases: CaseResult[] = suite.cases.map((testCase) => {
      const start = performance.now();
      try {
        const args = deepCloneArgs(testCase.args);
        const actual = fn(...args);
        const { ok, message } = valuesMatch(
          actual,
          testCase.expected,
          testCase.match
        );
        return {
          name: testCase.name,
          passed: ok,
          durationMs: Math.round(performance.now() - start),
          error: ok ? undefined : message,
        };
      } catch (err) {
        return {
          name: testCase.name,
          passed: false,
          durationMs: Math.round(performance.now() - start),
          error: err instanceof Error ? err.message : String(err),
        };
      }
    });

    return {
      suiteLabel: path.basename(solutionPath),
      functionLabel: exportName,
      cases,
    };
  });
}
