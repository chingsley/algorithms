#!/usr/bin/env python3
"""Run shared JSON test cases against a single Python solution module."""
import importlib.util
import json
import sys
import time
from copy import deepcopy


def sort_pair(pair):
    return sorted(pair)


def values_match(actual, expected, match_kind):
    if match_kind == "unorderedPair":
        if not isinstance(actual, list) or not isinstance(expected, list):
            return False, f"Expected lists, got {type(actual)} and {type(expected)}"
        if len(actual) != len(expected):
            return False, f"Expected {expected}, received {actual}"
        if sort_pair(actual) != sort_pair(expected):
            return False, f"Expected {expected}, received {actual}"
        return True, None
    if actual != expected:
        return False, f"Expected {expected!r}, received {actual!r}"
    return True, None


def load_module(solution_path: str):
    spec = importlib.util.spec_from_file_location("solution_under_test", solution_path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load module from {solution_path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def main():
    if len(sys.argv) != 4:
        print("Usage: python_harness.py <solution.py> <cases.json> <function_name>", file=sys.stderr)
        sys.exit(2)

    solution_path, cases_path, function_name = sys.argv[1:4]
    with open(cases_path, encoding="utf-8") as f:
        suite = json.load(f)

    module = load_module(solution_path)

    def matching_callables():
        found = []
        for name in dir(module):
            if name.startswith("_"):
                continue
            obj = getattr(module, name)
            if callable(obj) and (
                name == function_name or name.startswith(function_name)
            ):
                found.append(name)
        return sorted(found)

    names = matching_callables()
    if not names:
        hint = " (file may be empty or missing a top-level function)"
        print(
            f"No callable {function_name} in {solution_path}{hint}",
            file=sys.stderr,
        )
        sys.exit(2)

    fn = getattr(module, names[0])

    results = []
    for case in suite["cases"]:
        name = case["name"]
        match_kind = case.get("match", "deepEqual")
        start = time.perf_counter()
        try:
            args = deepcopy(case["args"])
            actual = fn(*args)
            ok, err = values_match(actual, case["expected"], match_kind)
            ms = int((time.perf_counter() - start) * 1000)
            results.append({"name": name, "passed": ok, "durationMs": ms, "error": err})
        except Exception as exc:  # noqa: BLE001
            ms = int((time.perf_counter() - start) * 1000)
            results.append(
                {
                    "name": name,
                    "passed": False,
                    "durationMs": ms,
                    "error": str(exc),
                }
            )

    # Last line must be valid JSON (solutions may print debug output on import/run).
    sys.stdout.write(json.dumps({"functionName": function_name, "cases": results}))


if __name__ == "__main__":
    main()
