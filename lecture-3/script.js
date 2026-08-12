// console.log("hello")
const math = require("./math.js");
const express=require("express");
const os=require("os");
//console.log(add(2, 3));
// console.log(math.add(2, 3));
// console.log(math.subtract(5,3));
// console.log("hello world!");

console.log(os.platform())
console.log(os.cpus());
console.log(os.totalmem()/(1024*1024),"GB");
