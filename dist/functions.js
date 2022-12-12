"use strict";
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(1, 2));
var sum2 = function (num1, num2) {
    typeof num1 == "string" ? num1 = parseInt(num1) : null;
    typeof num2 == "string" ? num2 = parseInt(num2) : null;
    return num1 + num2;
};
console.log(sum2("80", 8));
var voidPrint = function () {
    console.log("void");
    return;
};
voidPrint();
var n = null;
var u = undefined;
