"use strict";
exports.__esModule = true;
function print2DArr(arr) {
    var str = '| ';
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            str += arr[i][j] + ' | ';
        }
        str += '\n| ';
    }
    var str2 = str.replace(/\n\| $/, '');
    console.log(str2);
}
exports["default"] = print2DArr;
