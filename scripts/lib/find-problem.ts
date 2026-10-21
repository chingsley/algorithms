import fs from "node:fs";
import path from "node:path";

const SOLUTION_RE = /^solution[\w]*\.(ts|py|go)$/i;

export function resolveSolutionPath(input: string, repoRoot: string): string {
  const abs = path.isAbsolute(input)
    ? input
    : path.resolve(repoRoot, input);
  if (!fs.existsSync(abs)) {
    throw new Error(`File not found: ${abs}`);
  }
  const base = path.basename(abs);
  if (!SOLUTION_RE.test(base)) {
    throw new Error(
      `Expected a solution file matching solution*.ts|py|go, got: ${base}`
    );
  }
  return abs;
}

export function findProblemSuitePath(solutionPath: string): string {
  let dir = path.dirname(solutionPath);
  const root = path.parse(dir).root;
  while (dir !== root) {
    const candidate = path.join(dir, "tests", "cases.json");
    if (fs.existsSync(candidate)) {
      return candidate;
    }
    dir = path.dirname(dir);
  }
  throw new Error(
    `No tests/cases.json found for solution (walk up from ${solutionPath})`
  );
}

export function languageFromSolutionPath(solutionPath: string): "typescript" | "python" | "go" {
  const ext = path.extname(solutionPath).toLowerCase();
  if (ext === ".ts") return "typescript";
  if (ext === ".py") return "python";
  if (ext === ".go") return "go";
  throw new Error(`Unsupported solution extension: ${ext}`);
}
