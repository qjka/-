/**
 * Created by hxsd on 2017/1/2.
 */
// 先引入module01.js模块(执行一下该模块文件)
var module01 = require("./module01.js");
/*
上面这行代码，相当于：
var module01 = function (num1,num2){
     return num1 + num2;
 }
 */
 
// 引入模块module02
var module02 = require("./module02");
var module03 = require("./module03");
var module04 = require("./module04");

var a = 12;
var b = 13;

/*执行该函数，得到函数的返回值
var result = module01(a,b);
console.log("result:" + result);*/
//console.log("result:" + module01(a,b));

//console.log(module02(a,b));

//console.log(module03.add(a,b));
//console.log(module03.sub(a,b));

console.log(module04.add(a,b));
console.log(module04.sub(a,b));


