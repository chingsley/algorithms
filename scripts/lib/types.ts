export type MatchKind = "deepEqual" | "unorderedPair";

export interface TestCase {
  name: string;
  args: unknown[];
  expected: unknown;
  match?: MatchKind;
}

export interface ProblemSuite {
  problem: string;
  /** Python / TypeScript function name */
  functionName: string;
  /** Go exported function name (PascalCase) when different */
  goFunctionName?: string;
  cases: TestCase[];
}
