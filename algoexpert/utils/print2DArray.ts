export default function print2DArr(arr: number[][] | string[][]) {
  let str = '| ';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      str += arr[i][j] + ' | ';
    }
    str += '\n| ';
  }
  const str2 = str.replace(/\n\| $/, '');
  console.log(str2);
}