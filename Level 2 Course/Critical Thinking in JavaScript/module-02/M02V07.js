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

const uniServeyResponse = new Set(surveyResponses);
// console.log(uniServeyResponse.size);
// console.log(surveyResponses);
// console.log(uniServeyResponse);

const counts = [];
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

const group = surveyResponses.reduce((group, survey) => {
    if (!Object.keys(group).includes(survey)){
            group[survey] = 1;
            return group;
    } else group[survey] += 1;
    return group;
}, {});

console.log(group);

// output
// { A: 5, C: 3, B: 5, D: 1 }