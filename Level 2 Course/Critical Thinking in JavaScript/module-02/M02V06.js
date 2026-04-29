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
  "079", "643", "322", "252", "632", "289", "937", "712", "287", "444"
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

