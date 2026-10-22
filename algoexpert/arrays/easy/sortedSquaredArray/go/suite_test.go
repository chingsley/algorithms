package main

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"testing"
)

type testCase struct {
	Name     string          `json:"name"`
	Args     json.RawMessage `json:"args"`
	Expected json.RawMessage `json:"expected"`
}

type problemSuite struct {
	Problem string     `json:"problem"`
	Cases   []testCase `json:"cases"`
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

func TestSolution(t *testing.T) {
	if want := os.Getenv("SOLUTION_FILE"); want != "" {
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
			var argList []json.RawMessage
			if err := json.Unmarshal(tc.Args, &argList); err != nil {
				t.Fatalf("parse args: %v", err)
			}
			var array []int
			if err := json.Unmarshal(argList[0], &array); err != nil {
				t.Fatalf("decode array: %v", err)
			}
			var expected []int
			if err := json.Unmarshal(tc.Expected, &expected); err != nil {
				t.Fatalf("decode expected: %v", err)
			}
			got := sortedSquares(array)
			ge, _ := json.Marshal(got)
			ex, _ := json.Marshal(expected)
			if string(ge) != string(ex) {
				t.Fatalf("expected %s, got %s", string(ex), string(ge))
			}
		})
	}
}
