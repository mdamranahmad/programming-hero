//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

// let loopTimeStart = performance.now();

// for (let i = 0; i < 50; i++) {
//     let prodId = Math.floor(Math.random() * 1000 );
//     console.log(prodId.toString().padStart(3, 0));   
// }

// let loopTimeEnd = performance.now();

// console.log(`Time Taken to create Number List: ${loopTimeEnd - loopTimeStart} ms`);

const outPut = postsArray.reduce((firstItem, nextItem) => {
    // console.log(firstItem);
    // console.log(nextItem);
    firstItem[nextItem.id] = nextItem;
    return firstItem;
    
}, {});
// console.log(outPut);



//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }
/*
const authorsNewList = [
  "Alex", "Beth", "Chris", "Dani", "Evan", 
  "Fiona", "George", "Hanna", "Ian", "Julia"
];

const titlesNewList = [
  "Intro to SQL", 
  "Data Structures in JS", 
  "Understanding Reduce", 
  "CSS Grid Tricks", 
  "Mastering Promises", 
  "Node.js Streams", 
  "React State Management", 
  "Python for Data Science", 
  "Docker Containerization", 
  "API Design Patterns"
];

const libraryId = [
  "715", "318", "261", "899", "297", "058", "414", "724", "345", "690",
  "602", "909", "278", "459", "082", "793", "611", "620", "704", "683",
  "684", "331", "475", "310", "250", "843", "438", "750", "238", "849",
  "921", "186", "736", "881", "704", "913", "850", "383", "192", "357",
  "079", "643", "322", "252", "632", "289", "937", "712", "287", "444",
  "254", "288", "661", "546", "896", "778", "760", "006", "441", "635",
  "462", "546", "224", "759", "001", "925", "111", "776", "051", "943",
  "514", "173", "459", "375", "789", "204", "493", "405", "038", "051",
  "328", "442", "959", "467", "334", "474", "157", "439", "819", "944",
  "440", "042", "672", "469", "906", "624", "022", "851", "403", "424"
];

const libCreateTimeStart = performance.now();

const library = libraryId.reduce((books, nId, index) => {
    const authIndex = Math.floor(Math.random() * 10);
    const titleIndex = Math.floor(Math.random() * 10);
    const book = {};
    book.id = `p-${nId}`;
    book.title = titlesNewList[titleIndex];
    book.author = authorsNewList[authIndex];
    books.push(book);
    return books;
}, []);

console.log(library);

const libCreateTimeEnd = performance.now();

console.log(`Time taken to create library: ${libCreateTimeEnd - libCreateTimeStart} ms`);

*/
// output

/*
[
  { id: 'p-715', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-318', title: 'Docker Containerization', author: 'Evan' },
  { id: 'p-261', title: 'API Design Patterns', author: 'Hanna' },
  { id: 'p-899', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-297', title: 'Intro to SQL', author: 'Dani' },
  { id: 'p-058', title: 'Node.js Streams', author: 'Chris' },
  { id: 'p-414', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-724', title: 'Intro to SQL', author: 'Ian' },
  { id: 'p-345', title: 'React State Management', author: 'Evan' },
  { id: 'p-690', title: 'Python for Data Science', author: 'Dani' },
  { id: 'p-602', title: 'Node.js Streams', author: 'George' },
  { id: 'p-909', title: 'Docker Containerization', author: 'Julia' },
  { id: 'p-278', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-459', title: 'Intro to SQL', author: 'Hanna' },
  { id: 'p-082', title: 'Python for Data Science', author: 'Beth' },
  { id: 'p-793', title: 'API Design Patterns', author: 'Julia' },
  { id: 'p-611', title: 'API Design Patterns', author: 'Dani' },
  { id: 'p-620', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-704', title: 'Docker Containerization', author: 'Beth' },
  { id: 'p-683', title: 'Intro to SQL', author: 'Dani' },
  { id: 'p-684', title: 'Understanding Reduce', author: 'Julia' },
  { id: 'p-331', title: 'API Design Patterns', author: 'Beth' },
  { id: 'p-475', title: 'CSS Grid Tricks', author: 'Chris' },
  { id: 'p-310', title: 'Node.js Streams', author: 'Fiona' },
  { id: 'p-250', title: 'Intro to SQL', author: 'Hanna' },
  { id: 'p-843', title: 'Understanding Reduce', author: 'Ian' },
  { id: 'p-438', title: 'Python for Data Science', author: 'Julia' },
  { id: 'p-750', title: 'Mastering Promises', author: 'Hanna' },
  { id: 'p-238', title: 'React State Management', author: 'Chris' },
  { id: 'p-849', title: 'Understanding Reduce', author: 'Evan' },
  { id: 'p-921', title: 'Node.js Streams', author: 'Dani' },
  { id: 'p-186', title: 'Docker Containerization', author: 'Chris' },
  { id: 'p-736', title: 'Node.js Streams', author: 'Chris' },
  { id: 'p-881', title: 'Intro to SQL', author: 'Fiona' },
  { id: 'p-704', title: 'React State Management', author: 'Hanna' },
  { id: 'p-913', title: 'Python for Data Science', author: 'Beth' },
  { id: 'p-850', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-383', title: 'Node.js Streams', author: 'George' },
  { id: 'p-192', title: 'Docker Containerization', author: 'George' },
  { id: 'p-357', title: 'React State Management', author: 'Ian' },
  { id: 'p-079', title: 'Python for Data Science', author: 'Hanna' },
  { id: 'p-643', title: 'Understanding Reduce', author: 'Hanna' },
  { id: 'p-322', title: 'Understanding Reduce', author: 'Dani' },
  { id: 'p-252', title: 'API Design Patterns', author: 'Ian' },
  { id: 'p-632', title: 'Data Structures in JS', author: 'Ian' },
  { id: 'p-289', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-937', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-712', title: 'CSS Grid Tricks', author: 'Ian' },
  { id: 'p-287', title: 'CSS Grid Tricks', author: 'Chris' },
  { id: 'p-444', title: 'Python for Data Science', author: 'Ian' }
]
Time taken to create library: 7.3462 ms
*/
/* 
const authorsNewList = [
  "Alex", "Beth", "Chris", "Dani", "Evan", 
  "Fiona", "George", "Hanna", "Ian", "Julia"
];

const titlesNewList = [
  "Intro to SQL", 
  "Data Structures in JS", 
  "Understanding Reduce", 
  "CSS Grid Tricks", 
  "Mastering Promises", 
  "Node.js Streams", 
  "React State Management", 
  "Python for Data Science", 
  "Docker Containerization", 
  "API Design Patterns"
];

const libraryId = [
  "715", "318", "261", "899", "297", "058", "414", "724", "345", "690",
  "602", "909", "278", "459", "082", "793", "611", "620", "704", "683",
  "684", "331", "475", "310", "250", "843", "438", "750", "238", "849",
  "921", "186", "736", "881", "704", "913", "850", "383", "192", "357",
  "079", "643", "322", "252", "632", "289", "937", "712", "287", "444"
];

const libCreateTimeStart = performance.now();

const library = libraryId.reduce((books, nId) => {
    const authIndex = Math.floor(Math.random() * 10);
    const titleIndex = Math.floor(Math.random() * 10);
    books.push({
        id: `p-${nId}`,
        title: titlesNewList[titleIndex],
        author: authorsNewList[authIndex]
    })
    return books;
}, []);

console.log(library);

const libCreateTimeEnd = performance.now();

console.log(`Time taken to create library: ${libCreateTimeEnd - libCreateTimeStart} ms`);

*/
// output

/*
[
  { id: 'p-715', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-318', title: 'Understanding Reduce', author: 'Chris' },
  { id: 'p-261', title: 'CSS Grid Tricks', author: 'Hanna' },
  { id: 'p-899', title: 'Intro to SQL', author: 'George' },
  { id: 'p-297', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-058', title: 'Understanding Reduce', author: 'Hanna' },
  { id: 'p-414', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-724', title: 'Node.js Streams', author: 'Evan' },
  { id: 'p-345', title: 'Python for Data Science', author: 'Fiona' },
  { id: 'p-690', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-602', title: 'API Design Patterns', author: 'Evan' },
  { id: 'p-909', title: 'CSS Grid Tricks', author: 'George' },
  { id: 'p-278', title: 'Intro to SQL', author: 'Chris' },
  { id: 'p-459', title: 'CSS Grid Tricks', author: 'Hanna' },
  { id: 'p-082', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-793', title: 'Understanding Reduce', author: 'Fiona' },
  { id: 'p-611', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-620', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-704', title: 'Data Structures in JS', author: 'Alex' },
  { id: 'p-683', title: 'API Design Patterns', author: 'Ian' },
  { id: 'p-684', title: 'React State Management', author: 'Dani' },
  { id: 'p-331', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-475', title: 'Python for Data Science', author: 'Dani' },
  { id: 'p-310', title: 'Data Structures in JS', author: 'George' },
  { id: 'p-250', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-843', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-438', title: 'Understanding Reduce', author: 'George' },
  { id: 'p-750', title: 'Mastering Promises', author: 'Julia' },
  { id: 'p-238', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-849', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-921', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-186', title: 'CSS Grid Tricks', author: 'Chris' },
  { id: 'p-736', title: 'React State Management', author: 'Dani' },
  { id: 'p-881', title: 'Understanding Reduce', author: 'Julia' },
  { id: 'p-704', title: 'Understanding Reduce', author: 'Beth' },
  { id: 'p-913', title: 'Python for Data Science', author: 'Dani' },
  { id: 'p-850', title: 'Data Structures in JS', author: 'Fiona' },
  { id: 'p-383', title: 'React State Management', author: 'Ian' },
  { id: 'p-192', title: 'Docker Containerization', author: 'Chris' },
  { id: 'p-357', title: 'Understanding Reduce', author: 'Julia' },
  { id: 'p-079', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-643', title: 'Node.js Streams', author: 'Fiona' },
  { id: 'p-322', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-252', title: 'Node.js Streams', author: 'Chris' },
  { id: 'p-632', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-289', title: 'Mastering Promises', author: 'George' },
  { id: 'p-937', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-712', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-287', title: 'Mastering Promises', author: 'Chris' },
  { id: 'p-444', title: 'API Design Patterns', author: 'Fiona' }
]
*/

const library = [
  { id: 'p-715', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-318', title: 'Understanding Reduce', author: 'Chris' },
  { id: 'p-261', title: 'CSS Grid Tricks', author: 'Hanna' },
  { id: 'p-899', title: 'Intro to SQL', author: 'George' },
  { id: 'p-297', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-058', title: 'Understanding Reduce', author: 'Hanna' },
  { id: 'p-414', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-724', title: 'Node.js Streams', author: 'Evan' },
  { id: 'p-345', title: 'Python for Data Science', author: 'Fiona' },
  { id: 'p-690', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-602', title: 'API Design Patterns', author: 'Evan' },
  { id: 'p-909', title: 'CSS Grid Tricks', author: 'George' },
  { id: 'p-278', title: 'Intro to SQL', author: 'Chris' },
  { id: 'p-459', title: 'CSS Grid Tricks', author: 'Hanna' },
  { id: 'p-082', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-793', title: 'Understanding Reduce', author: 'Fiona' },
  { id: 'p-611', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-620', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-704', title: 'Data Structures in JS', author: 'Alex' },
  { id: 'p-683', title: 'API Design Patterns', author: 'Ian' },
  { id: 'p-684', title: 'React State Management', author: 'Dani' },
  { id: 'p-331', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-475', title: 'Python for Data Science', author: 'Dani' },
  { id: 'p-310', title: 'Data Structures in JS', author: 'George' },
  { id: 'p-250', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-843', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-438', title: 'Understanding Reduce', author: 'George' },
  { id: 'p-750', title: 'Mastering Promises', author: 'Julia' },
  { id: 'p-238', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-849', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-921', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-186', title: 'CSS Grid Tricks', author: 'Chris' },
  { id: 'p-736', title: 'React State Management', author: 'Dani' },
  { id: 'p-881', title: 'Understanding Reduce', author: 'Julia' },
  { id: 'p-704', title: 'Understanding Reduce', author: 'Beth' },
  { id: 'p-913', title: 'Python for Data Science', author: 'Dani' },
  { id: 'p-850', title: 'Data Structures in JS', author: 'Fiona' },
  { id: 'p-383', title: 'React State Management', author: 'Ian' },
  { id: 'p-192', title: 'Docker Containerization', author: 'Chris' },
  { id: 'p-357', title: 'Understanding Reduce', author: 'Julia' },
  { id: 'p-079', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-643', title: 'Node.js Streams', author: 'Fiona' },
  { id: 'p-322', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-252', title: 'Node.js Streams', author: 'Chris' },
  { id: 'p-632', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-289', title: 'Mastering Promises', author: 'George' },
  { id: 'p-937', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-712', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-287', title: 'Mastering Promises', author: 'Chris' },
  { id: 'p-444', title: 'API Design Patterns', author: 'Fiona' },
  { id: 'p-715', title: 'Docker Containerization', author: 'Ian' },
  { id: 'p-318', title: 'Docker Containerization', author: 'Julia' },
  { id: 'p-261', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-899', title: 'Node.js Streams', author: 'Evan' },
  { id: 'p-297', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-058', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-414', title: 'CSS Grid Tricks', author: 'Alex' },
  { id: 'p-724', title: 'Node.js Streams', author: 'Alex' },
  { id: 'p-345', title: 'Mastering Promises', author: 'Julia' },
  { id: 'p-690', title: 'API Design Patterns', author: 'Beth' },
  { id: 'p-602', title: 'React State Management', author: 'Alex' },
  { id: 'p-909', title: 'Intro to SQL', author: 'George' },
  { id: 'p-278', title: 'API Design Patterns', author: 'Fiona' },
  { id: 'p-459', title: 'Node.js Streams', author: 'Alex' },
  { id: 'p-082', title: 'CSS Grid Tricks', author: 'Evan' },
  { id: 'p-793', title: 'Understanding Reduce', author: 'Beth' },
  { id: 'p-611', title: 'Understanding Reduce', author: 'Alex' },
  { id: 'p-620', title: 'React State Management', author: 'Hanna' },
  { id: 'p-704', title: 'Data Structures in JS', author: 'Hanna' },
  { id: 'p-683', title: 'CSS Grid Tricks', author: 'Evan' },
  { id: 'p-684', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-331', title: 'Understanding Reduce', author: 'Alex' },
  { id: 'p-475', title: 'API Design Patterns', author: 'Beth' },
  { id: 'p-310', title: 'Docker Containerization', author: 'Dani' },
  { id: 'p-250', title: 'Mastering Promises', author: 'Fiona' },
  { id: 'p-843', title: 'Understanding Reduce', author: 'Dani' },
  { id: 'p-438', title: 'Intro to SQL', author: 'Dani' },
  { id: 'p-750', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-238', title: 'Understanding Reduce', author: 'Ian' },
  { id: 'p-849', title: 'Node.js Streams', author: 'Julia' },
  { id: 'p-921', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-186', title: 'Docker Containerization', author: 'Beth' },
  { id: 'p-736', title: 'Mastering Promises', author: 'Julia' },
  { id: 'p-881', title: 'Node.js Streams', author: 'Dani' },
  { id: 'p-704', title: 'Intro to SQL', author: 'Dani' },
  { id: 'p-913', title: 'Docker Containerization', author: 'George' },
  { id: 'p-850', title: 'Intro to SQL', author: 'George' },
  { id: 'p-383', title: 'CSS Grid Tricks', author: 'Beth' },
  { id: 'p-192', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-357', title: 'React State Management', author: 'Hanna' },
  { id: 'p-079', title: 'API Design Patterns', author: 'George' },
  { id: 'p-643', title: 'Data Structures in JS', author: 'George' },
  { id: 'p-322', title: 'Mastering Promises', author: 'Hanna' },
  { id: 'p-252', title: 'Mastering Promises', author: 'Dani' },
  { id: 'p-632', title: 'React State Management', author: 'Ian' },
  { id: 'p-289', title: 'Docker Containerization', author: 'Alex' },
  { id: 'p-937', title: 'Understanding Reduce', author: 'Alex' },
  { id: 'p-712', title: 'React State Management', author: 'Dani' },
  { id: 'p-287', title: 'Understanding Reduce', author: 'Ian' },
  { id: 'p-444', title: 'Mastering Promises', author: 'Dani' },
  { id: 'p-254', title: 'API Design Patterns', author: 'Chris' },
  { id: 'p-288', title: 'Node.js Streams', author: 'Alex' },
  { id: 'p-661', title: 'Docker Containerization', author: 'Fiona' },
  { id: 'p-546', title: 'Intro to SQL', author: 'Beth' },
  { id: 'p-896', title: 'API Design Patterns', author: 'Beth' },
  { id: 'p-778', title: 'React State Management', author: 'Evan' },
  { id: 'p-760', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-006', title: 'Node.js Streams', author: 'Dani' },
  { id: 'p-441', title: 'Docker Containerization', author: 'Julia' },
  { id: 'p-635', title: 'Node.js Streams', author: 'Chris' },
  { id: 'p-462', title: 'Docker Containerization', author: 'Ian' },
  { id: 'p-546', title: 'CSS Grid Tricks', author: 'Beth' },
  { id: 'p-224', title: 'Mastering Promises', author: 'George' },
  { id: 'p-759', title: 'Data Structures in JS', author: 'Ian' },
  { id: 'p-001', title: 'Mastering Promises', author: 'Evan' },
  { id: 'p-925', title: 'CSS Grid Tricks', author: 'Evan' },
  { id: 'p-111', title: 'React State Management', author: 'Dani' },
  { id: 'p-776', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-051', title: 'Mastering Promises', author: 'Alex' },
  { id: 'p-943', title: 'API Design Patterns', author: 'Evan' },
  { id: 'p-514', title: 'API Design Patterns', author: 'Dani' },
  { id: 'p-173', title: 'Node.js Streams', author: 'Evan' },
  { id: 'p-459', title: 'Intro to SQL', author: 'Julia' },
  { id: 'p-375', title: 'React State Management', author: 'Beth' },
  { id: 'p-789', title: 'React State Management', author: 'Ian' },
  { id: 'p-204', title: 'Python for Data Science', author: 'Evan' },
  { id: 'p-493', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-405', title: 'Node.js Streams', author: 'Julia' },
  { id: 'p-038', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-051', title: 'Node.js Streams', author: 'Fiona' },
  { id: 'p-328', title: 'React State Management', author: 'Beth' },
  { id: 'p-442', title: 'Intro to SQL', author: 'George' },
  { id: 'p-959', title: 'CSS Grid Tricks', author: 'Beth' },
  { id: 'p-467', title: 'Data Structures in JS', author: 'Chris' },
  { id: 'p-334', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-474', title: 'Mastering Promises', author: 'Alex' },
  { id: 'p-157', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-439', title: 'Understanding Reduce', author: 'Hanna' },
  { id: 'p-819', title: 'Understanding Reduce', author: 'George' },
  { id: 'p-944', title: 'React State Management', author: 'Hanna' },
  { id: 'p-440', title: 'Node.js Streams', author: 'Dani' },
  { id: 'p-042', title: 'Docker Containerization', author: 'George' },
  { id: 'p-672', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-469', title: 'Intro to SQL', author: 'Ian' },
  { id: 'p-906', title: 'Docker Containerization', author: 'Chris' },
  { id: 'p-624', title: 'React State Management', author: 'Evan' },
  { id: 'p-022', title: 'React State Management', author: 'Ian' },
  { id: 'p-851', title: 'Docker Containerization', author: 'Alex' },
  { id: 'p-403', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-424', title: 'Mastering Promises', author: 'Beth' }
]

const arrTimeStart = performance.now();

const targetInArr = library.find(book => book.id === "p-403");

const arrTimeEnd = performance.now();
console.log(targetInArr);
console.log(`Time Taken in Array: ${arrTimeEnd - arrTimeStart} ms`);


/*
// create a lookup table from library

const newLibrary = library.reduce((container, nextBook) => {
    container[nextBook.id] = nextBook;
    return container;
}, {});

console.log(newLibrary);
*/
// output

/* 
{
  'p-715': { id: 'p-715', title: 'Node.js Streams', author: 'Beth' },
  'p-318': { id: 'p-318', title: 'Understanding Reduce', author: 'Chris' },
  'p-261': { id: 'p-261', title: 'CSS Grid Tricks', author: 'Hanna' },
  'p-899': { id: 'p-899', title: 'Intro to SQL', author: 'George' },
  'p-297': { id: 'p-297', title: 'Data Structures in JS', author: 'Beth' },
  'p-058': { id: 'p-058', title: 'Understanding Reduce', author: 'Hanna' },
  'p-414': { id: 'p-414', title: 'Data Structures in JS', author: 'Julia' },
  'p-724': { id: 'p-724', title: 'Node.js Streams', author: 'Evan' },
  'p-345': { id: 'p-345', title: 'Python for Data Science', author: 'Fiona' },
  'p-690': { id: 'p-690', title: 'Node.js Streams', author: 'Ian' },
  'p-602': { id: 'p-602', title: 'API Design Patterns', author: 'Evan' },
  'p-909': { id: 'p-909', title: 'CSS Grid Tricks', author: 'George' },
  'p-278': { id: 'p-278', title: 'Intro to SQL', author: 'Chris' },
  'p-459': { id: 'p-459', title: 'CSS Grid Tricks', author: 'Hanna' },
  'p-082': { id: 'p-082', title: 'Intro to SQL', author: 'Alex' },
  'p-793': { id: 'p-793', title: 'Understanding Reduce', author: 'Fiona' },
  'p-611': { id: 'p-611', title: 'Intro to SQL', author: 'Alex' },
  'p-620': { id: 'p-620', title: 'Python for Data Science', author: 'Chris' },
  'p-704': { id: 'p-704', title: 'Understanding Reduce', author: 'Beth' },
  'p-683': { id: 'p-683', title: 'API Design Patterns', author: 'Ian' },
  'p-684': { id: 'p-684', title: 'React State Management', author: 'Dani' },
  'p-331': { id: 'p-331', title: 'Python for Data Science', author: 'Ian' },
  'p-475': { id: 'p-475', title: 'Python for Data Science', author: 'Dani' },
  'p-310': { id: 'p-310', title: 'Data Structures in JS', author: 'George' },
  'p-250': { id: 'p-250', title: 'Node.js Streams', author: 'Hanna' },
  'p-843': { id: 'p-843', title: 'Data Structures in JS', author: 'Julia' },
  'p-438': { id: 'p-438', title: 'Understanding Reduce', author: 'George' },
  'p-750': { id: 'p-750', title: 'Mastering Promises', author: 'Julia' },
  'p-238': { id: 'p-238', title: 'Node.js Streams', author: 'Beth' },
  'p-849': { id: 'p-849', title: 'Mastering Promises', author: 'Ian' },
  'p-921': { id: 'p-921', title: 'Node.js Streams', author: 'Ian' },
  'p-186': { id: 'p-186', title: 'CSS Grid Tricks', author: 'Chris' },
  'p-736': { id: 'p-736', title: 'React State Management', author: 'Dani' },
  'p-881': { id: 'p-881', title: 'Understanding Reduce', author: 'Julia' },
  'p-913': { id: 'p-913', title: 'Python for Data Science', author: 'Dani' },
  'p-850': { id: 'p-850', title: 'Data Structures in JS', author: 'Fiona' },
  'p-383': { id: 'p-383', title: 'React State Management', author: 'Ian' },
  'p-192': { id: 'p-192', title: 'Docker Containerization', author: 'Chris' },
  'p-357': { id: 'p-357', title: 'Understanding Reduce', author: 'Julia' },
  'p-079': { id: 'p-079', title: 'Node.js Streams', author: 'Hanna' },
  'p-643': { id: 'p-643', title: 'Node.js Streams', author: 'Fiona' },
  'p-322': { id: 'p-322', title: 'Data Structures in JS', author: 'Beth' },
  'p-252': { id: 'p-252', title: 'Node.js Streams', author: 'Chris' },
  'p-632': { id: 'p-632', title: 'Node.js Streams', author: 'Beth' },
  'p-289': { id: 'p-289', title: 'Mastering Promises', author: 'George' },
  'p-937': { id: 'p-937', title: 'Python for Data Science', author: 'Alex' },
  'p-712': { id: 'p-712', title: 'Node.js Streams', author: 'Hanna' },
  'p-287': { id: 'p-287', title: 'Mastering Promises', author: 'Chris' },
  'p-444': { id: 'p-444', title: 'API Design Patterns', author: 'Fiona' }
}
*/

const newLibrary = {
  'p-715': { id: 'p-715', title: 'Docker Containerization', author: 'Ian' },
  'p-318': { id: 'p-318', title: 'Docker Containerization', author: 'Julia' },
  'p-261': { id: 'p-261', title: 'Mastering Promises', author: 'Ian' },
  'p-899': { id: 'p-899', title: 'Node.js Streams', author: 'Evan' },
  'p-297': { id: 'p-297', title: 'Python for Data Science', author: 'Alex' },
  'p-058': { id: 'p-058', title: 'Python for Data Science', author: 'Alex' },
  'p-414': { id: 'p-414', title: 'CSS Grid Tricks', author: 'Alex' },
  'p-724': { id: 'p-724', title: 'Node.js Streams', author: 'Alex' },
  'p-345': { id: 'p-345', title: 'Mastering Promises', author: 'Julia' },
  'p-690': { id: 'p-690', title: 'API Design Patterns', author: 'Beth' },
  'p-602': { id: 'p-602', title: 'React State Management', author: 'Alex' },
  'p-909': { id: 'p-909', title: 'Intro to SQL', author: 'George' },
  'p-278': { id: 'p-278', title: 'API Design Patterns', author: 'Fiona' },
  'p-459': { id: 'p-459', title: 'Intro to SQL', author: 'Julia' },
  'p-082': { id: 'p-082', title: 'CSS Grid Tricks', author: 'Evan' },
  'p-793': { id: 'p-793', title: 'Understanding Reduce', author: 'Beth' },
  'p-611': { id: 'p-611', title: 'Understanding Reduce', author: 'Alex' },
  'p-620': { id: 'p-620', title: 'React State Management', author: 'Hanna' },
  'p-704': { id: 'p-704', title: 'Intro to SQL', author: 'Dani' },
  'p-683': { id: 'p-683', title: 'CSS Grid Tricks', author: 'Evan' },
  'p-684': { id: 'p-684', title: 'Python for Data Science', author: 'Ian' },
  'p-331': { id: 'p-331', title: 'Understanding Reduce', author: 'Alex' },
  'p-475': { id: 'p-475', title: 'API Design Patterns', author: 'Beth' },
  'p-310': { id: 'p-310', title: 'Docker Containerization', author: 'Dani' },
  'p-250': { id: 'p-250', title: 'Mastering Promises', author: 'Fiona' },
  'p-843': { id: 'p-843', title: 'Understanding Reduce', author: 'Dani' },
  'p-438': { id: 'p-438', title: 'Intro to SQL', author: 'Dani' },
  'p-750': { id: 'p-750', title: 'Python for Data Science', author: 'Alex' },
  'p-238': { id: 'p-238', title: 'Understanding Reduce', author: 'Ian' },
  'p-849': { id: 'p-849', title: 'Node.js Streams', author: 'Julia' },
  'p-921': { id: 'p-921', title: 'Python for Data Science', author: 'Chris' },
  'p-186': { id: 'p-186', title: 'Docker Containerization', author: 'Beth' },
  'p-736': { id: 'p-736', title: 'Mastering Promises', author: 'Julia' },
  'p-881': { id: 'p-881', title: 'Node.js Streams', author: 'Dani' },
  'p-913': { id: 'p-913', title: 'Docker Containerization', author: 'George' },
  'p-850': { id: 'p-850', title: 'Intro to SQL', author: 'George' },
  'p-383': { id: 'p-383', title: 'CSS Grid Tricks', author: 'Beth' },
  'p-192': { id: 'p-192', title: 'Mastering Promises', author: 'Ian' },
  'p-357': { id: 'p-357', title: 'React State Management', author: 'Hanna' },
  'p-079': { id: 'p-079', title: 'API Design Patterns', author: 'George' },
  'p-643': { id: 'p-643', title: 'Data Structures in JS', author: 'George' },
  'p-322': { id: 'p-322', title: 'Mastering Promises', author: 'Hanna' },
  'p-252': { id: 'p-252', title: 'Mastering Promises', author: 'Dani' },
  'p-632': { id: 'p-632', title: 'React State Management', author: 'Ian' },
  'p-289': { id: 'p-289', title: 'Docker Containerization', author: 'Alex' },
  'p-937': { id: 'p-937', title: 'Understanding Reduce', author: 'Alex' },
  'p-712': { id: 'p-712', title: 'React State Management', author: 'Dani' },
  'p-287': { id: 'p-287', title: 'Understanding Reduce', author: 'Ian' },
  'p-444': { id: 'p-444', title: 'Mastering Promises', author: 'Dani' },
  'p-254': { id: 'p-254', title: 'API Design Patterns', author: 'Chris' },
  'p-288': { id: 'p-288', title: 'Node.js Streams', author: 'Alex' },
  'p-661': { id: 'p-661', title: 'Docker Containerization', author: 'Fiona' },
  'p-546': { id: 'p-546', title: 'CSS Grid Tricks', author: 'Beth' },
  'p-896': { id: 'p-896', title: 'API Design Patterns', author: 'Beth' },
  'p-778': { id: 'p-778', title: 'React State Management', author: 'Evan' },
  'p-760': { id: 'p-760', title: 'Python for Data Science', author: 'Chris' },
  'p-006': { id: 'p-006', title: 'Node.js Streams', author: 'Dani' },
  'p-441': { id: 'p-441', title: 'Docker Containerization', author: 'Julia' },
  'p-635': { id: 'p-635', title: 'Node.js Streams', author: 'Chris' },
  'p-462': { id: 'p-462', title: 'Docker Containerization', author: 'Ian' },
  'p-224': { id: 'p-224', title: 'Mastering Promises', author: 'George' },
  'p-759': { id: 'p-759', title: 'Data Structures in JS', author: 'Ian' },
  'p-001': { id: 'p-001', title: 'Mastering Promises', author: 'Evan' },
  'p-925': { id: 'p-925', title: 'CSS Grid Tricks', author: 'Evan' },
  'p-111': { id: 'p-111', title: 'React State Management', author: 'Dani' },
  'p-776': { id: 'p-776', title: 'Data Structures in JS', author: 'Julia' },
  'p-051': { id: 'p-051', title: 'Node.js Streams', author: 'Fiona' },
  'p-943': { id: 'p-943', title: 'API Design Patterns', author: 'Evan' },
  'p-514': { id: 'p-514', title: 'API Design Patterns', author: 'Dani' },
  'p-173': { id: 'p-173', title: 'Node.js Streams', author: 'Evan' },
  'p-375': { id: 'p-375', title: 'React State Management', author: 'Beth' },
  'p-789': { id: 'p-789', title: 'React State Management', author: 'Ian' },
  'p-204': { id: 'p-204', title: 'Python for Data Science', author: 'Evan' },
  'p-493': { id: 'p-493', title: 'Node.js Streams', author: 'Hanna' },
  'p-405': { id: 'p-405', title: 'Node.js Streams', author: 'Julia' },
  'p-038': { id: 'p-038', title: 'Data Structures in JS', author: 'Beth' },
  'p-328': { id: 'p-328', title: 'React State Management', author: 'Beth' },
  'p-442': { id: 'p-442', title: 'Intro to SQL', author: 'George' },
  'p-959': { id: 'p-959', title: 'CSS Grid Tricks', author: 'Beth' },
  'p-467': { id: 'p-467', title: 'Data Structures in JS', author: 'Chris' },
  'p-334': { id: 'p-334', title: 'Data Structures in JS', author: 'Julia' },
  'p-474': { id: 'p-474', title: 'Mastering Promises', author: 'Alex' },
  'p-157': { id: 'p-157', title: 'Python for Data Science', author: 'Ian' },
  'p-439': { id: 'p-439', title: 'Understanding Reduce', author: 'Hanna' },
  'p-819': { id: 'p-819', title: 'Understanding Reduce', author: 'George' },
  'p-944': { id: 'p-944', title: 'React State Management', author: 'Hanna' },
  'p-440': { id: 'p-440', title: 'Node.js Streams', author: 'Dani' },
  'p-042': { id: 'p-042', title: 'Docker Containerization', author: 'George' },
  'p-672': { id: 'p-672', title: 'Python for Data Science', author: 'Ian' },
  'p-469': { id: 'p-469', title: 'Intro to SQL', author: 'Ian' },
  'p-906': { id: 'p-906', title: 'Docker Containerization', author: 'Chris' },
  'p-624': { id: 'p-624', title: 'React State Management', author: 'Evan' },
  'p-022': { id: 'p-022', title: 'React State Management', author: 'Ian' },
  'p-851': { id: 'p-851', title: 'Docker Containerization', author: 'Alex' },
  'p-403': { id: 'p-403', title: 'Node.js Streams', author: 'Ian' },
  'p-424': { id: 'p-424', title: 'Mastering Promises', author: 'Beth' }
}

const objTimeStart = performance.now();

console.log(newLibrary["p-403"]);

const objTimeEnd = performance.now();

console.log(`Time Taken in Object: ${objTimeEnd - objTimeStart} ms`);


// reverse order

console.log("Now the order is reversed...");


const newLibrary2 = {
  'p-715': { id: 'p-715', title: 'Docker Containerization', author: 'Ian' },
  'p-318': { id: 'p-318', title: 'Docker Containerization', author: 'Julia' },
  'p-261': { id: 'p-261', title: 'Mastering Promises', author: 'Ian' },
  'p-899': { id: 'p-899', title: 'Node.js Streams', author: 'Evan' },
  'p-297': { id: 'p-297', title: 'Python for Data Science', author: 'Alex' },
  'p-058': { id: 'p-058', title: 'Python for Data Science', author: 'Alex' },
  'p-414': { id: 'p-414', title: 'CSS Grid Tricks', author: 'Alex' },
  'p-724': { id: 'p-724', title: 'Node.js Streams', author: 'Alex' },
  'p-345': { id: 'p-345', title: 'Mastering Promises', author: 'Julia' },
  'p-690': { id: 'p-690', title: 'API Design Patterns', author: 'Beth' },
  'p-602': { id: 'p-602', title: 'React State Management', author: 'Alex' },
  'p-909': { id: 'p-909', title: 'Intro to SQL', author: 'George' },
  'p-278': { id: 'p-278', title: 'API Design Patterns', author: 'Fiona' },
  'p-459': { id: 'p-459', title: 'Intro to SQL', author: 'Julia' },
  'p-082': { id: 'p-082', title: 'CSS Grid Tricks', author: 'Evan' },
  'p-793': { id: 'p-793', title: 'Understanding Reduce', author: 'Beth' },
  'p-611': { id: 'p-611', title: 'Understanding Reduce', author: 'Alex' },
  'p-620': { id: 'p-620', title: 'React State Management', author: 'Hanna' },
  'p-704': { id: 'p-704', title: 'Intro to SQL', author: 'Dani' },
  'p-683': { id: 'p-683', title: 'CSS Grid Tricks', author: 'Evan' },
  'p-684': { id: 'p-684', title: 'Python for Data Science', author: 'Ian' },
  'p-331': { id: 'p-331', title: 'Understanding Reduce', author: 'Alex' },
  'p-475': { id: 'p-475', title: 'API Design Patterns', author: 'Beth' },
  'p-310': { id: 'p-310', title: 'Docker Containerization', author: 'Dani' },
  'p-250': { id: 'p-250', title: 'Mastering Promises', author: 'Fiona' },
  'p-843': { id: 'p-843', title: 'Understanding Reduce', author: 'Dani' },
  'p-438': { id: 'p-438', title: 'Intro to SQL', author: 'Dani' },
  'p-750': { id: 'p-750', title: 'Python for Data Science', author: 'Alex' },
  'p-238': { id: 'p-238', title: 'Understanding Reduce', author: 'Ian' },
  'p-849': { id: 'p-849', title: 'Node.js Streams', author: 'Julia' },
  'p-921': { id: 'p-921', title: 'Python for Data Science', author: 'Chris' },
  'p-186': { id: 'p-186', title: 'Docker Containerization', author: 'Beth' },
  'p-736': { id: 'p-736', title: 'Mastering Promises', author: 'Julia' },
  'p-881': { id: 'p-881', title: 'Node.js Streams', author: 'Dani' },
  'p-913': { id: 'p-913', title: 'Docker Containerization', author: 'George' },
  'p-850': { id: 'p-850', title: 'Intro to SQL', author: 'George' },
  'p-383': { id: 'p-383', title: 'CSS Grid Tricks', author: 'Beth' },
  'p-192': { id: 'p-192', title: 'Mastering Promises', author: 'Ian' },
  'p-357': { id: 'p-357', title: 'React State Management', author: 'Hanna' },
  'p-079': { id: 'p-079', title: 'API Design Patterns', author: 'George' },
  'p-643': { id: 'p-643', title: 'Data Structures in JS', author: 'George' },
  'p-322': { id: 'p-322', title: 'Mastering Promises', author: 'Hanna' },
  'p-252': { id: 'p-252', title: 'Mastering Promises', author: 'Dani' },
  'p-632': { id: 'p-632', title: 'React State Management', author: 'Ian' },
  'p-289': { id: 'p-289', title: 'Docker Containerization', author: 'Alex' },
  'p-937': { id: 'p-937', title: 'Understanding Reduce', author: 'Alex' },
  'p-712': { id: 'p-712', title: 'React State Management', author: 'Dani' },
  'p-287': { id: 'p-287', title: 'Understanding Reduce', author: 'Ian' },
  'p-444': { id: 'p-444', title: 'Mastering Promises', author: 'Dani' },
  'p-254': { id: 'p-254', title: 'API Design Patterns', author: 'Chris' },
  'p-288': { id: 'p-288', title: 'Node.js Streams', author: 'Alex' },
  'p-661': { id: 'p-661', title: 'Docker Containerization', author: 'Fiona' },
  'p-546': { id: 'p-546', title: 'CSS Grid Tricks', author: 'Beth' },
  'p-896': { id: 'p-896', title: 'API Design Patterns', author: 'Beth' },
  'p-778': { id: 'p-778', title: 'React State Management', author: 'Evan' },
  'p-760': { id: 'p-760', title: 'Python for Data Science', author: 'Chris' },
  'p-006': { id: 'p-006', title: 'Node.js Streams', author: 'Dani' },
  'p-441': { id: 'p-441', title: 'Docker Containerization', author: 'Julia' },
  'p-635': { id: 'p-635', title: 'Node.js Streams', author: 'Chris' },
  'p-462': { id: 'p-462', title: 'Docker Containerization', author: 'Ian' },
  'p-224': { id: 'p-224', title: 'Mastering Promises', author: 'George' },
  'p-759': { id: 'p-759', title: 'Data Structures in JS', author: 'Ian' },
  'p-001': { id: 'p-001', title: 'Mastering Promises', author: 'Evan' },
  'p-925': { id: 'p-925', title: 'CSS Grid Tricks', author: 'Evan' },
  'p-111': { id: 'p-111', title: 'React State Management', author: 'Dani' },
  'p-776': { id: 'p-776', title: 'Data Structures in JS', author: 'Julia' },
  'p-051': { id: 'p-051', title: 'Node.js Streams', author: 'Fiona' },
  'p-943': { id: 'p-943', title: 'API Design Patterns', author: 'Evan' },
  'p-514': { id: 'p-514', title: 'API Design Patterns', author: 'Dani' },
  'p-173': { id: 'p-173', title: 'Node.js Streams', author: 'Evan' },
  'p-375': { id: 'p-375', title: 'React State Management', author: 'Beth' },
  'p-789': { id: 'p-789', title: 'React State Management', author: 'Ian' },
  'p-204': { id: 'p-204', title: 'Python for Data Science', author: 'Evan' },
  'p-493': { id: 'p-493', title: 'Node.js Streams', author: 'Hanna' },
  'p-405': { id: 'p-405', title: 'Node.js Streams', author: 'Julia' },
  'p-038': { id: 'p-038', title: 'Data Structures in JS', author: 'Beth' },
  'p-328': { id: 'p-328', title: 'React State Management', author: 'Beth' },
  'p-442': { id: 'p-442', title: 'Intro to SQL', author: 'George' },
  'p-959': { id: 'p-959', title: 'CSS Grid Tricks', author: 'Beth' },
  'p-467': { id: 'p-467', title: 'Data Structures in JS', author: 'Chris' },
  'p-334': { id: 'p-334', title: 'Data Structures in JS', author: 'Julia' },
  'p-474': { id: 'p-474', title: 'Mastering Promises', author: 'Alex' },
  'p-157': { id: 'p-157', title: 'Python for Data Science', author: 'Ian' },
  'p-439': { id: 'p-439', title: 'Understanding Reduce', author: 'Hanna' },
  'p-819': { id: 'p-819', title: 'Understanding Reduce', author: 'George' },
  'p-944': { id: 'p-944', title: 'React State Management', author: 'Hanna' },
  'p-440': { id: 'p-440', title: 'Node.js Streams', author: 'Dani' },
  'p-042': { id: 'p-042', title: 'Docker Containerization', author: 'George' },
  'p-672': { id: 'p-672', title: 'Python for Data Science', author: 'Ian' },
  'p-469': { id: 'p-469', title: 'Intro to SQL', author: 'Ian' },
  'p-906': { id: 'p-906', title: 'Docker Containerization', author: 'Chris' },
  'p-624': { id: 'p-624', title: 'React State Management', author: 'Evan' },
  'p-022': { id: 'p-022', title: 'React State Management', author: 'Ian' },
  'p-851': { id: 'p-851', title: 'Docker Containerization', author: 'Alex' },
  'p-403': { id: 'p-403', title: 'Node.js Streams', author: 'Ian' },
  'p-424': { id: 'p-424', title: 'Mastering Promises', author: 'Beth' }
}

const objTimeStart2 = performance.now();

console.log(newLibrary2["p-403"]);

const objTimeEnd2 = performance.now();

console.log(`Time Taken in Object: ${objTimeEnd2 - objTimeStart2} ms`);


const library2 = [
  { id: 'p-715', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-318', title: 'Understanding Reduce', author: 'Chris' },
  { id: 'p-261', title: 'CSS Grid Tricks', author: 'Hanna' },
  { id: 'p-899', title: 'Intro to SQL', author: 'George' },
  { id: 'p-297', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-058', title: 'Understanding Reduce', author: 'Hanna' },
  { id: 'p-414', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-724', title: 'Node.js Streams', author: 'Evan' },
  { id: 'p-345', title: 'Python for Data Science', author: 'Fiona' },
  { id: 'p-690', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-602', title: 'API Design Patterns', author: 'Evan' },
  { id: 'p-909', title: 'CSS Grid Tricks', author: 'George' },
  { id: 'p-278', title: 'Intro to SQL', author: 'Chris' },
  { id: 'p-459', title: 'CSS Grid Tricks', author: 'Hanna' },
  { id: 'p-082', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-793', title: 'Understanding Reduce', author: 'Fiona' },
  { id: 'p-611', title: 'Intro to SQL', author: 'Alex' },
  { id: 'p-620', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-704', title: 'Data Structures in JS', author: 'Alex' },
  { id: 'p-683', title: 'API Design Patterns', author: 'Ian' },
  { id: 'p-684', title: 'React State Management', author: 'Dani' },
  { id: 'p-331', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-475', title: 'Python for Data Science', author: 'Dani' },
  { id: 'p-310', title: 'Data Structures in JS', author: 'George' },
  { id: 'p-250', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-843', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-438', title: 'Understanding Reduce', author: 'George' },
  { id: 'p-750', title: 'Mastering Promises', author: 'Julia' },
  { id: 'p-238', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-849', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-921', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-186', title: 'CSS Grid Tricks', author: 'Chris' },
  { id: 'p-736', title: 'React State Management', author: 'Dani' },
  { id: 'p-881', title: 'Understanding Reduce', author: 'Julia' },
  { id: 'p-704', title: 'Understanding Reduce', author: 'Beth' },
  { id: 'p-913', title: 'Python for Data Science', author: 'Dani' },
  { id: 'p-850', title: 'Data Structures in JS', author: 'Fiona' },
  { id: 'p-383', title: 'React State Management', author: 'Ian' },
  { id: 'p-192', title: 'Docker Containerization', author: 'Chris' },
  { id: 'p-357', title: 'Understanding Reduce', author: 'Julia' },
  { id: 'p-079', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-643', title: 'Node.js Streams', author: 'Fiona' },
  { id: 'p-322', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-252', title: 'Node.js Streams', author: 'Chris' },
  { id: 'p-632', title: 'Node.js Streams', author: 'Beth' },
  { id: 'p-289', title: 'Mastering Promises', author: 'George' },
  { id: 'p-937', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-712', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-287', title: 'Mastering Promises', author: 'Chris' },
  { id: 'p-444', title: 'API Design Patterns', author: 'Fiona' },
  { id: 'p-715', title: 'Docker Containerization', author: 'Ian' },
  { id: 'p-318', title: 'Docker Containerization', author: 'Julia' },
  { id: 'p-261', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-899', title: 'Node.js Streams', author: 'Evan' },
  { id: 'p-297', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-058', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-414', title: 'CSS Grid Tricks', author: 'Alex' },
  { id: 'p-724', title: 'Node.js Streams', author: 'Alex' },
  { id: 'p-345', title: 'Mastering Promises', author: 'Julia' },
  { id: 'p-690', title: 'API Design Patterns', author: 'Beth' },
  { id: 'p-602', title: 'React State Management', author: 'Alex' },
  { id: 'p-909', title: 'Intro to SQL', author: 'George' },
  { id: 'p-278', title: 'API Design Patterns', author: 'Fiona' },
  { id: 'p-459', title: 'Node.js Streams', author: 'Alex' },
  { id: 'p-082', title: 'CSS Grid Tricks', author: 'Evan' },
  { id: 'p-793', title: 'Understanding Reduce', author: 'Beth' },
  { id: 'p-611', title: 'Understanding Reduce', author: 'Alex' },
  { id: 'p-620', title: 'React State Management', author: 'Hanna' },
  { id: 'p-704', title: 'Data Structures in JS', author: 'Hanna' },
  { id: 'p-683', title: 'CSS Grid Tricks', author: 'Evan' },
  { id: 'p-684', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-331', title: 'Understanding Reduce', author: 'Alex' },
  { id: 'p-475', title: 'API Design Patterns', author: 'Beth' },
  { id: 'p-310', title: 'Docker Containerization', author: 'Dani' },
  { id: 'p-250', title: 'Mastering Promises', author: 'Fiona' },
  { id: 'p-843', title: 'Understanding Reduce', author: 'Dani' },
  { id: 'p-438', title: 'Intro to SQL', author: 'Dani' },
  { id: 'p-750', title: 'Python for Data Science', author: 'Alex' },
  { id: 'p-238', title: 'Understanding Reduce', author: 'Ian' },
  { id: 'p-849', title: 'Node.js Streams', author: 'Julia' },
  { id: 'p-921', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-186', title: 'Docker Containerization', author: 'Beth' },
  { id: 'p-736', title: 'Mastering Promises', author: 'Julia' },
  { id: 'p-881', title: 'Node.js Streams', author: 'Dani' },
  { id: 'p-704', title: 'Intro to SQL', author: 'Dani' },
  { id: 'p-913', title: 'Docker Containerization', author: 'George' },
  { id: 'p-850', title: 'Intro to SQL', author: 'George' },
  { id: 'p-383', title: 'CSS Grid Tricks', author: 'Beth' },
  { id: 'p-192', title: 'Mastering Promises', author: 'Ian' },
  { id: 'p-357', title: 'React State Management', author: 'Hanna' },
  { id: 'p-079', title: 'API Design Patterns', author: 'George' },
  { id: 'p-643', title: 'Data Structures in JS', author: 'George' },
  { id: 'p-322', title: 'Mastering Promises', author: 'Hanna' },
  { id: 'p-252', title: 'Mastering Promises', author: 'Dani' },
  { id: 'p-632', title: 'React State Management', author: 'Ian' },
  { id: 'p-289', title: 'Docker Containerization', author: 'Alex' },
  { id: 'p-937', title: 'Understanding Reduce', author: 'Alex' },
  { id: 'p-712', title: 'React State Management', author: 'Dani' },
  { id: 'p-287', title: 'Understanding Reduce', author: 'Ian' },
  { id: 'p-444', title: 'Mastering Promises', author: 'Dani' },
  { id: 'p-254', title: 'API Design Patterns', author: 'Chris' },
  { id: 'p-288', title: 'Node.js Streams', author: 'Alex' },
  { id: 'p-661', title: 'Docker Containerization', author: 'Fiona' },
  { id: 'p-546', title: 'Intro to SQL', author: 'Beth' },
  { id: 'p-896', title: 'API Design Patterns', author: 'Beth' },
  { id: 'p-778', title: 'React State Management', author: 'Evan' },
  { id: 'p-760', title: 'Python for Data Science', author: 'Chris' },
  { id: 'p-006', title: 'Node.js Streams', author: 'Dani' },
  { id: 'p-441', title: 'Docker Containerization', author: 'Julia' },
  { id: 'p-635', title: 'Node.js Streams', author: 'Chris' },
  { id: 'p-462', title: 'Docker Containerization', author: 'Ian' },
  { id: 'p-546', title: 'CSS Grid Tricks', author: 'Beth' },
  { id: 'p-224', title: 'Mastering Promises', author: 'George' },
  { id: 'p-759', title: 'Data Structures in JS', author: 'Ian' },
  { id: 'p-001', title: 'Mastering Promises', author: 'Evan' },
  { id: 'p-925', title: 'CSS Grid Tricks', author: 'Evan' },
  { id: 'p-111', title: 'React State Management', author: 'Dani' },
  { id: 'p-776', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-051', title: 'Mastering Promises', author: 'Alex' },
  { id: 'p-943', title: 'API Design Patterns', author: 'Evan' },
  { id: 'p-514', title: 'API Design Patterns', author: 'Dani' },
  { id: 'p-173', title: 'Node.js Streams', author: 'Evan' },
  { id: 'p-459', title: 'Intro to SQL', author: 'Julia' },
  { id: 'p-375', title: 'React State Management', author: 'Beth' },
  { id: 'p-789', title: 'React State Management', author: 'Ian' },
  { id: 'p-204', title: 'Python for Data Science', author: 'Evan' },
  { id: 'p-493', title: 'Node.js Streams', author: 'Hanna' },
  { id: 'p-405', title: 'Node.js Streams', author: 'Julia' },
  { id: 'p-038', title: 'Data Structures in JS', author: 'Beth' },
  { id: 'p-051', title: 'Node.js Streams', author: 'Fiona' },
  { id: 'p-328', title: 'React State Management', author: 'Beth' },
  { id: 'p-442', title: 'Intro to SQL', author: 'George' },
  { id: 'p-959', title: 'CSS Grid Tricks', author: 'Beth' },
  { id: 'p-467', title: 'Data Structures in JS', author: 'Chris' },
  { id: 'p-334', title: 'Data Structures in JS', author: 'Julia' },
  { id: 'p-474', title: 'Mastering Promises', author: 'Alex' },
  { id: 'p-157', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-439', title: 'Understanding Reduce', author: 'Hanna' },
  { id: 'p-819', title: 'Understanding Reduce', author: 'George' },
  { id: 'p-944', title: 'React State Management', author: 'Hanna' },
  { id: 'p-440', title: 'Node.js Streams', author: 'Dani' },
  { id: 'p-042', title: 'Docker Containerization', author: 'George' },
  { id: 'p-672', title: 'Python for Data Science', author: 'Ian' },
  { id: 'p-469', title: 'Intro to SQL', author: 'Ian' },
  { id: 'p-906', title: 'Docker Containerization', author: 'Chris' },
  { id: 'p-624', title: 'React State Management', author: 'Evan' },
  { id: 'p-022', title: 'React State Management', author: 'Ian' },
  { id: 'p-851', title: 'Docker Containerization', author: 'Alex' },
  { id: 'p-403', title: 'Node.js Streams', author: 'Ian' },
  { id: 'p-424', title: 'Mastering Promises', author: 'Beth' }
]

const arrTimeStart2 = performance.now();

const targetInArr2 = library2.find(book => book.id === "p-403");

const arrTimeEnd2 = performance.now();
console.log(targetInArr2);
console.log(`Time Taken in Array: ${arrTimeEnd2 - arrTimeStart2} ms`);

