//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]

/*
// working sol1
const postLookUp = posts.reduce((table, post)=> {
    table[post.userId] ?
        table[post.userId].push(post) :
            table[post.userId] = [post]; 
    return table;
},{});

// console.log(postLookUp);

const postsById = users.reduce((table, user)=> {
    table.push(user = {...user,
        posts: postLookUp[user.id]
    })
    return table;
}, []);

console.log(postsById);
console.log(JSON.stringify(postsById, null, 2));
console.dir(postsById, {depth: null});
*/

//output
/*
[
  { id: 101, name: 'Alice', posts: [ [Object], [Object] ] },
  { id: 102, name: 'Bob', posts: [ [Object], [Object] ] },
  { id: 103, name: 'Charlie', posts: [ [Object] ] }
]
[
  {
    "id": 101,
    "name": "Alice",
    "posts": [
      {
        "id": 2,
        "userId": 101,
        "title": "React Hooks"
      },
      {
        "id": 3,
        "userId": 101,
        "title": "Data Structures"
      }
    ]
  },
  {
    "id": 102,
    "name": "Bob",
    "posts": [
      {
        "id": 1,
        "userId": 102,
        "title": "My first post"
      },
      {
        "id": 5,
        "userId": 102,
        "title": "Node.js streams"
      }
    ]
  },
  {
    "id": 103,
    "name": "Charlie",
    "posts": [
      {
        "id": 4,
        "userId": 103,
        "title": "CSS is fun"
      }
    ]
  }
]
[
  {
    id: 101,
    name: 'Alice',
    posts: [
      { id: 2, userId: 101, title: 'React Hooks' },
      { id: 3, userId: 101, title: 'Data Structures' }
    ]
  },
  {
    id: 102,
    name: 'Bob',
    posts: [
      { id: 1, userId: 102, title: 'My first post' },
      { id: 5, userId: 102, title: 'Node.js streams' }
    ]
  },
  {
    id: 103,
    name: 'Charlie',
    posts: [ { id: 4, userId: 103, title: 'CSS is fun' } ]
  }
]
*/

// working sol2
const postsById = posts.reduce((table, post)=>{
    const {userId} = post;      // object destructuring
    table[userId] ?
        table[userId].push(post) :
            table[userId] = [post];
    return table;
},{});

// console.log(postsById);

const userPosts = users.map(user => {
    return {
        ...user,
        posts: postsById[user.id] || [],
    }
});

console.log(JSON.stringify(userPosts));

// output
/*
[{"id":101,"name":"Alice","posts":[{"id":2,"userId":101,"title":"React Hooks"},{"id":3,"userId":101,"title":"Data Structures"}]},{"id":102,"name":"Bob","posts":[{"id":1,"userId":102,"title":"My first post"},{"id":5,"userId":102,"title":"Node.js streams"}]},{"id":103,"name":"Charlie","posts":[{"id":4,"userId":103,"title":"CSS is fun"}]}]
*/