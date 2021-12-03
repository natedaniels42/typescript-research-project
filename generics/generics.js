"use strict";
let numArray = [];
let strArray = [];
function lastItem(arr) {
    let sum;
    return arr[arr.length - 1];
}
document.addEventListener('DOMContentLoaded', e => {
    var _a, _b;
    (_a = document.getElementById("numSubmit")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
        e.preventDefault();
        numArray.push(parseInt(document.getElementById('num1').value));
        numArray.push(parseInt(document.getElementById('num2').value));
        numArray.push(parseInt(document.getElementById('num3').value));
        numArray.push(parseInt(document.getElementById('num4').value));
        numArray.push(parseInt(document.getElementById('num5').value));
        let output = document.getElementById('numResult').value;
        document.getElementById('numResult').value = `${lastItem(numArray)} is the last item of the [${numArray}] array`;
        console.log(lastItem(numArray));
    });
    (_b = document.getElementById("strSubmit")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', e => {
        e.preventDefault();
        strArray.push(document.getElementById('string1').value);
        strArray.push(document.getElementById('string2').value);
        strArray.push(document.getElementById('string3').value);
        strArray.push(document.getElementById('string4').value);
        strArray.push(document.getElementById('string5').value);
        let output = document.getElementById('strResult').value;
        document.getElementById('strResult').value = `${lastItem(strArray)} is the last item of the [${strArray}] array`;
        console.log(lastItem(strArray));
    });
});
