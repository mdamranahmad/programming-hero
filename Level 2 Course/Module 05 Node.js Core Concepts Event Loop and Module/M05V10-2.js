// //
// const x = require('./M05V10-1');

// console.log(x);

// Let Destructure
/*
const {a} = require('./M05V10-1');

console.log(a);
*/

// another version

const {a : x} = require('./M05V10-1');  //  usage of name alias
const {a : y} = require('./M05V10-3');

const add = require('./M05V10/add.js');

console.log(`Addition: ${add(x,y)}`);   // output- Addition: 300

// structure is too messy, have to type each file type separately

// solution- 
// create a index.js file on the subfolder
// in subfolder, every links were imported into index file using require, which are then exported accordingly
// we will import everything from index file

const{f1, f2} = require('./M05V10');    // destructuring, received as object

console.log(`Addition from index file: ${f1(x, y)}`);   // Addition from index file: 300
console.log(`Substraction from index file: ${f2(x, y)}`);   // Substraction from index file: -100