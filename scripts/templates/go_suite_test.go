package main

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"sort"
	"testing"
)

type testCase struct {
	Name     string          `json:"name"`
	Args     json.RawMessage `json:"args"`
	Expected json.RawMessage `json:"expected"`
	Match    string          `json:"match"`
}

type problemSuite struct {
	Problem        string     `json:"problem"`
	FunctionName   string     `json:"functionName"`
	GoFunctionName string     `json:"goFunctionName"`
	Cases          []testCase `json:"cases"`
}

func loadSuite(t *testing.T) problemSuite {
	_, file, _, ok := runtime.Caller(0)
	if !ok {
		t.Fatal("runtime.Caller failed")
	}
	dir := filepath.Dir(file)
	raw, err := os.ReadFile(filepath.Join(dir, "..", "tests", "cases.json"))
	if err != nil {
		t.Fatalf("read cases.json: %v", err)
	}
	var suite problemSuite
	if err := json.Unmarshal(raw, &suite); err != nil {
		t.Fatalf("parse cases.json: %v", err)
	}
	return suite
}

func decodeArg[T any](t *testing.T, raw json.RawMessage) T {
	var v T
	if err := json.Unmarshal(raw, &v); err != nil {
		t.Fatalf("decode arg: %v", err)
	}
	return v
}

func decodeExpected[T any](t *testing.T, raw json.RawMessage) T {
	var v T
	if err := json.Unmarshal(raw, &v); err != nil {
		t.Fatalf("decode expected: %v", err)
	}
	return v
}

func assertDeepEqual(t *testing.T, actual, expected interface{}) {
	ae, _ := json.Marshal(actual)
	ex, _ := json.Marshal(expected)
	if string(ae) != string(ex) {
		t.Fatalf("expected %s, got %s", string(ex), string(ae))
	}
}

func assertUnorderedPair(t *testing.T, actual, expected []int) {
	if len(actual) != len(expected) {
		t.Fatalf("expected %v, got %v", expected, actual)
	}
	as := append([]int(nil), actual...)
	es := append([]int(nil), expected...)
	sort.Ints(as)
	sort.Ints(es)
	if string(mustJSON(as)) != string(mustJSON(es)) {
		t.Fatalf("expected %v, got %v", expected, actual)
	}
}

func mustJSON(v interface{}) []byte {
	b, err := json.Marshal(v)
	if err != nil {
		panic(err)
	}
	return b
}

func runCase(t *testing.T, suite problemSuite, tc testCase) {
	var argList []json.RawMessage
	if err := json.Unmarshal(tc.Args, &argList); err != nil {
		t.Fatalf("parse args: %v", err)
	}

	switch suite.Problem {
	case "transposeMatrix":
		matrix := decodeArg[[][]int](t, argList[0])
		expected := decodeExpected[[][]int](t, tc.Expected)
		got := TransposeMatrix(matrix)
		assertDeepEqual(t, got, expected)

	case "isValidSubsequence":
		array := decodeArg[[]int](t, argList[0])
		sequence := decodeArg[[]int](t, argList[1])
		expected := decodeExpected[bool](t, tc.Expected)
		got := IsValidSubsequence(array, sequence)
		assertDeepEqual(t, got, expected)

	case "nonConstructibleChange":
		coins := decodeArg[[]int](t, argList[0])
		expected := decodeExpected[int](t, tc.Expected)
		got := NonConstructibleChange(coins)
		assertDeepEqual(t, got, expected)

	default:
		t.Fatalf("unsupported problem %q for Go tests", suite.Problem)
	}
}

func TestSolution(t *testing.T) {
	if want := os.Getenv("SOLUTION_FILE"); want != "" {
		// Ensures npm test targets a solution file in this directory (optional guard).
		_, file, _, ok := runtime.Caller(0)
		if ok {
			dir := filepath.Dir(file)
			if _, err := os.Stat(filepath.Join(dir, want)); err != nil {
				t.Fatalf("SOLUTION_FILE %q not found in %s", want, dir)
			}
		}
	}

	suite := loadSuite(t)
	for _, tc := range suite.Cases {
		t.Run(tc.Name, func(t *testing.T) {
			runCase(t, suite, tc)
		})
	}
}
