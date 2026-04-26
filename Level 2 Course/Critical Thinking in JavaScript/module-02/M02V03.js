const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

console.log(numbers.sort());
console.log(numbers.sort((a, b) => b - a));
console.log(fruits.sort());
console.log(fruits.sort((a, b) => a.localeCompare(b)));

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

console.log(tagsFromPosts.flat());
console.log(new Set(tagsFromPosts.flat()));
console.log([...new Set(tagsFromPosts.flat())]);