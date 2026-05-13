//  Harnessong IIFE as the ultimate module wrapper

// Immediately Invoked Function Expression  

(() => {
//  code 
})();

// let declare a function

var a = 10;
var a = 20;

console.log(a); //  output- 20
/*
let b = 30;
let b = 50;     // ERROR- Cannot redeclare block-scoped variable 'b'.
*/
//  a IIFE to resolve the issue

(() => {
    let c = 35;
    console.log(c);
})();

(() => {
    let c = 45;
    console.log(c);
})();

//  var was globel scope variable, while let is local scope variable
//  

function f1() {
    console.log('Mr A');
}

function f1() {
    console.log('Mr B');
}

f1();       //  output- Mr B

// first function f1() is ignored

// this issue can be solved using IIFE

(function f2() {
    console.log('Mr AB');
})();                       //  self invoked, output- Mr AB

(function f2() {
    console.log('Mr BC');
})();                       //  self invoked, output- Mr BC

//  both function invoked inteself

