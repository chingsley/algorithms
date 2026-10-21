const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;

export interface CaseResult {
  name: string;
  passed: boolean;
  durationMs: number;
  error?: string;
}

export interface SuiteRunResult {
  suiteLabel: string;
  functionLabel?: string;
  cases: CaseResult[];
}

export function printResults(
  relativePath: string,
  runs: SuiteRunResult[]
): { passed: number; failed: number } {
  let passed = 0;
  let failed = 0;

  for (const run of runs) {
    const suiteFailed = run.cases.some((c) => !c.passed);
    const header = suiteFailed
      ? red(`FAIL`) + `  ${relativePath}${run.functionLabel ? ` (${run.functionLabel})` : ""}`
      : green(`PASS`) + `  ${relativePath}${run.functionLabel ? ` (${run.functionLabel})` : ""}`;
    console.log(header);

    for (const c of run.cases) {
      if (c.passed) {
        passed++;
        console.log(`  ${green("✓")} ${c.name} ${dim(`(${c.durationMs} ms)`)}`);
      } else {
        failed++;
        console.log(`  ${red("✕")} ${c.name} ${dim(`(${c.durationMs} ms)`)}`);
        if (c.error) {
          for (const line of c.error.split("\n")) {
            console.log(`    ${red(line)}`);
          }
        }
      }
    }
    console.log("");
  }

  const total = passed + failed;
  console.log(
    suiteFailedSummary(failed) +
      `\nTests:       ${failed ? red(`${failed} failed`) + ", " : ""}${green(`${passed} passed`)}, ${total} total`
  );

  return { passed, failed };
}

function suiteFailedSummary(failed: number): string {
  if (failed === 0) {
    return green("Test Suites: 1 passed, 1 total");
  }
  return red("Test Suites: 1 failed, 1 total");
}
