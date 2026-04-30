//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

/* not required
const uniServeyResponse = new Set(surveyResponses);
*/

// console.log(uniServeyResponse.size);
// console.log(surveyResponses);
// console.log(uniServeyResponse);

/* not required
const counts = [];
*/

// const newArr = Array.from(surveyResponses)
// for (let i = 0; i < uniServeyResponse.length; i++) {
// for (let i = 0; i < uniServeyResponse.size; i++) {
//     // console.log("test");
//     let count = 0;
//     for (j = 0; j < surveyResponses.length; j++) {
//         // console.log("test2");
//         if (surveyResponses[j] === uniServeyResponse[i]) {
//             count++;
//             console.log(count);
//             return count;
//         } 
//     }
//     counts.push(count);
//     return counts;
// }

/* Workable Sol 1, commented for alternate solution
const group = surveyResponses.reduce((group, survey) => {
    if (!Object.keys(group).includes(survey)){
            group[survey] = 1;
            return group;
    } else group[survey] += 1;
    return group;
}, {});

console.log(group);
*/
// output
// { A: 5, C: 3, B: 5, D: 1 }

/* Working Sol 2, commented for alternate sol
const result = surveyResponses.reduce((table, response) => {
  Object.keys(table).includes(response) ? table[response] += 1 : table[response] = 1;
  return table;
}, {});

console.log(result);
*/

// output
// { A: 5, C: 3, B: 5, D: 1 }

// Working Sol 3, much simpler, faster sol
const result = surveyResponses.reduce((table, response) => {
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});

console.log(result);