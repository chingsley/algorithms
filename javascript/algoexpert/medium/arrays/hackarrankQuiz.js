'use strict';
import { createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let inputLines = [];
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
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
function counts(teamA, teamB) {
    teamA.sort((a, b) => a - b);
    // teamB.sort((a, b) => a - b);
    const result = [];
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
    const ws = createWriteStream(process.env['OUTPUT_PATH']);
    const teamACount = parseInt(readLine().trim(), 10);
    let teamA = [];
    for (let i = 0; i < teamACount; i++) {
        const teamAItem = parseInt(readLine().trim(), 10);
        teamA.push(teamAItem);
    }
    const teamBCount = parseInt(readLine().trim(), 10);
    let teamB = [];
    for (let i = 0; i < teamBCount; i++) {
        const teamBItem = parseInt(readLine().trim(), 10);
        teamB.push(teamBItem);
    }
    const result = counts(teamA, teamB);
    ws.write(result.join('\n') + '\n');
    ws.end();
}
{
    {
        'use strict';
        import { WriteStream, createWriteStream } from "fs";
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
        let inputString = '';
        let inputLines = [];
        let currentLine = 0;
        process.stdin.on('data', function (inputStdin) {
            inputString += inputStdin;
        });
        process.stdin.on('end', function () {
            inputLines = inputString.split('\n');
            inputString = '';
            main();
        });
        function readLine() {
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
        function counts(teamA, teamB) {
            teamA.sort((a, b) => a - b);
            const result = [];
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
        function binarySearch(teamA, target) {
            let [leftIdx, rightIdx] = [0, teamA.length - 1];
            while (leftIdx <= rightIdx) {
                const midIdx = Math.floor((leftIdx + rightIdx) / 2);
                const midValue = teamA[midIdx];
                if (midValue > target && midIdx === 0) {
                    return 0;
                }
                else if (midValue > target && teamA[midIdx - 1] <= target) {
                    return midIdx;
                }
                else if (midValue <= target) {
                    leftIdx = midIdx + 1;
                }
                else {
                    rightIdx = midIdx - 1;
                }
            }
        }
        function main() {
            const ws = createWriteStream(process.env['OUTPUT_PATH']);
            const teamACount = parseInt(readLine().trim(), 10);
            let teamA = [];
            for (let i = 0; i < teamACount; i++) {
                const teamAItem = parseInt(readLine().trim(), 10);
                teamA.push(teamAItem);
            }
            const teamBCount = parseInt(readLine().trim(), 10);
            let teamB = [];
            for (let i = 0; i < teamBCount; i++) {
                const teamBItem = parseInt(readLine().trim(), 10);
                teamB.push(teamBItem);
            }
            const result = counts(teamA, teamB);
            ws.write(result.join('\n') + '\n');
            ws.end();
        }
    }
}
