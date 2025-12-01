'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}



/*
 * Complete the 'counts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY teamA
 *  2. INTEGER_ARRAY teamB
 */

function counts(teamA: number[], teamB: number[]): number[] {
  teamA.sort((a, b) => a - b);
  // teamB.sort((a, b) => a - b);
  const result: number[] = [];
  console.log({ teamA, teamB });
  for (let scoreB of teamB) {
    let count = 0;
    if (scoreB >= teamA[teamA.length - 1]) {
      result.push(teamA.length);
      continue;
    }
    for (let i = 0; i < teamA.length; i++) {
      if (teamA[i] > scoreB) {
        count = i;
        break;
      }
    }
    result.push(count);
  }

  return result;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const teamACount: number = parseInt(readLine().trim(), 10);

  let teamA: number[] = [];

  for (let i: number = 0; i < teamACount; i++) {
    const teamAItem: number = parseInt(readLine().trim(), 10);

    teamA.push(teamAItem);
  }

  const teamBCount: number = parseInt(readLine().trim(), 10);

  let teamB: number[] = [];

  for (let i: number = 0; i < teamBCount; i++) {
    const teamBItem: number = parseInt(readLine().trim(), 10);

    teamB.push(teamBItem);
  }

  const result: number[] = counts(teamA, teamB);

  ws.write(result.join('\n') + '\n');

  ws.end();
}




{
  {
    'use strict';

    import { WriteStream, createWriteStream } from "fs";
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString: string = '';
    let inputLines: string[] = [];
    let currentLine: number = 0;

    process.stdin.on('data', function (inputStdin: string): void {
      inputString += inputStdin;
    });

    process.stdin.on('end', function (): void {
      inputLines = inputString.split('\n');
      inputString = '';

      main();
    });

    function readLine(): string {
      return inputLines[currentLine++];
    }


    /*
     * Complete the 'counts' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY teamA
     *  2. INTEGER_ARRAY teamB
     */

    function counts(teamA: number[], teamB: number[]): number[] {
      teamA.sort((a, b) => a - b);

      const result: number[] = [];
      console.log({ teamA, teamB });
      for (let scoreB of teamB) {
        if (scoreB >= teamA[teamA.length - 1]) {
          result.push(teamA.length);
          continue;
        }
        const idx = binarySearch(teamA, scoreB);
        result.push(idx);
      }

      return result;
    }

    function binarySearch(teamA: number[], target: number): number {
      let [leftIdx, rightIdx] = [0, teamA.length - 1];
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        const midValue = teamA[midIdx];
        if (midValue > target && midIdx === 0) {
          return 0;
        } else if (midValue > target && teamA[midIdx - 1] <= target) {
          return midIdx;
        } else if (midValue <= target) {
          leftIdx = midIdx + 1;
        } else {
          rightIdx = midIdx - 1;
        }
      }
    }
    function main() {
      const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

      const teamACount: number = parseInt(readLine().trim(), 10);

      let teamA: number[] = [];

      for (let i: number = 0; i < teamACount; i++) {
        const teamAItem: number = parseInt(readLine().trim(), 10);

        teamA.push(teamAItem);
      }

      const teamBCount: number = parseInt(readLine().trim(), 10);

      let teamB: number[] = [];

      for (let i: number = 0; i < teamBCount; i++) {
        const teamBItem: number = parseInt(readLine().trim(), 10);

        teamB.push(teamBItem);
      }

      const result: number[] = counts(teamA, teamB);

      ws.write(result.join('\n') + '\n');

      ws.end();
    }

  }
}
