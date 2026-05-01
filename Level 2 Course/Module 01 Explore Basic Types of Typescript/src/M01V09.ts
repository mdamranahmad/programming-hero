// Destructuring in Typescript
// extract value/output from a nested object or array
// array destructuring and object destructuring

// Object Destructuring

const user = {
    id: 123,
    name: {
        firstName : 'Md',
        middleName: 'Amran',
        lastName: 'Ahmad',
    },
    gender: 'Male',
    favouritColor: 'Metalic Blue',
}

const userFavColor = user.favouritColor;
const userMiddleName = user.name.middleName;

// const {favouritColor}= user;

// console.log(favouritColor);

// // output
// // Metalic Blue

// const {favouritColor : favCol} = user;      // name alias 

// console.log(favCol);

// output
// Metalic Blue

// const {favouritColor : favCol, name:{middleName}} = user;

// console.log(middleName);

// // output
// // Amran

const {favouritColor : favCol, name: {lastName : lName}} = user;

console.log(lName);

// Array Destructuring

const friends = ['Karim', 'Rahim', 'Mahim'];

const [ ,, fr3] = friends;

console.log(fr3);