// Type Guard Using Typeof And In
// type guard is aka type narrowing
// in, typeof

// let declare a function 
const add = (num1: number, num2: number) => num1 + num2;

// what if we want our add function to concat inputs if there any string provided

/*
// lets declare another function for that purpose
const add1 = (num1: number | string, num2: number |string ) => {
    num1 + num2;
};
*/

// we are facing an error on line 12
// Operator '+' cannot be applied to types 'string | number' and 'string | number'.
// + operator works only on number, do not concat here
// we have to use type guard here
// to verify whether the data is number or string using typeof
// line 10-15 has been commented for that purpose

// adding typegurd to resolve the error
const add1 = (num1: number | string, num2: number |string ) => {
    return typeof num1 === 'number' && typeof num2 === 'number' ?
        num1 + num2 :
            num1.toString() + num2.toString();
};

// function add1 checks if given inputs are number
// if both input is number, it will add them and return the result
// if any one is not number, it will conver these input into string and then concat them

console.log(add1(2,2));             // 4
console.log(add1("2",2));           // 22
console.log(add1(2,"2"));           // 22
console.log(add1("2","2"));         // 22


// this process is also known as type narrowing

// in guard

// lets declare 2 type
type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: 'Admin';
};

// lets define a function that receives a user as input
// user can be normal user or admin user

const getUserInfo = (user: NormalUser | AdminUser) => {
    // console.log(`This user is ${user.name} and his role is: ${user.role}` );
    'role' in user ?
        console.log(`This user is ${user.name} and his role is: ${user.role}` ) :
            console.log(`This user is ${user.name}` );
};

// there is an error on line Ln59, Col 68
/*
ERROR MESSAGE
Property 'role' does not exist on type 'NormalUser | AdminUser'.
  Property 'role' does not exist on type 'NormalUser'.
*/

// to resolve the issue, we have check the type before proceeding
// Ln 59 has been commented and a guard is implemented 
// in is implemented on Ln 60 with a conditional, issue resolved



getUserInfo({name: "Normal"});      // output- This user is Normal
getUserInfo({name: "Normal", role: 'Admin'});   // output- This user is Normal and his role is: Admin