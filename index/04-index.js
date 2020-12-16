let num = 123;
let arr = ['123', 456, {a:1}]; // 基本类型5种：Undefined Null Boolean Number String，按值访问，操作保存在变量中的实际的值
let person = new Object(); // 引用类型可以增加属性与方法；
person.name = "mujin";
person.drive = () => {return "dirver~~~"};

console.log(person);
console.log(typeof num);
console.log(typeof arr);
console.log(num instanceof Number);
console.log(arr instanceof Array);