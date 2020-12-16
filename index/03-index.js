"use strict";
console.log("\nString:");
console.log("==========字符串方法===================")
console.log("javascript".length); // 10
console.log(String(123)); //123
console.log(String(true)); //true
console.log(String(undefined)); //undefined
console.log(String(null)); //null
console.log(String(false)); //false

console.log("\nNumber:");
console.log("==========转型函数===================")
let obj = {a:1};
console.log(typeof(obj), obj.valueOf(), typeof(obj.valueOf()));

console.log(Number({})); //NaN
console.log(Number("123")); //123
console.log(Number("12.3")); //12.3
console.log(Number("number")); //NaN
console.log(Number("")); //0
console.log(Number(true)); //1
console.log(Number(false), Number(undefined), Number(null)); //0 NaN 0

console.log(parseInt("-123")); // -123
console.log(parseInt("123adf")); // 123
console.log(parseInt("")); // NaN
console.log(parseInt("adf")); // NaN
console.log(parseInt("123.123")); // 123


console.log("==========NaN类型===================")
console.log(NaN); //NaN
console.log(typeof NaN); //number
console.log(100 / 0); // NaN
console.log(NaN == NaN); //false
console.log(isNaN(123)); //false
console.log(isNaN("123")); //false
console.log("123", typeof("123")); //123 string
console.log("123" == 123) // true
console.log(isNaN("number")); // true
// console.log(012); // SyntaxError: Octal literals are not allowed in strict mode.
console.log(12); //12
console.log(0x12); //18
console.log(3e-17); //3e-17
console.log(0.1 + 0.2); //0.30000000000000004 浮点数值的最高精度为17位
console.log(Number.MIN_VALUE); //最小值 5e-324
console.log(Number.MAX_VALUE); //最大值 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE * 2); // Infinity
console.log(Infinity); // Infinity 超出MAX_VALUE，得到正无穷
let num = Number.MAX_VALUE * 2;
console.log(isFinite(num)); // false isFinite() 判断值是否位于负无穷到正无穷之间
console.log(Infinity + 100);
// for (let i = Infinity; i <= Infinity + 2; i++){
//     console.log(i, "Infinity可以操作"); //无法继续计算
// }

console.log("\nundefined与null:");
let message = null;
// let message;
console.log(typeof message); // object null是一个空指针对象

if (message != undefined) {
  console.log("message 不为null");
} else {
  console.log("message 为null");
}

console.log(undefined == null); // true undefined值派生自null的值。
console.log(undefined === null); // false

console.log("\nboolean类型:");
console.log(typeof true); // boolean
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(1 == true); // true
console.log(0 == false); //true
