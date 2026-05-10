// Explore Mapped Types
// Application of loop on types
// Map

const arrOfNum : number[] = [1, 4, 6];
const arrOfStr : string[] = ['1', '4', '6'];    // has to convert manually

// a variable, where a items of an number array is being iterated and
// then converted to string, provided as a array of string output
const arrOfStrUMap : string[] = 
    arrOfNum.map((num) => num.toString());      // toString() Method- converts number into string

console.log(arrOfStrUMap);
// input - [1, 4, 6]
// output- [ '1', '4', '6' ]

// a number type
type AreaInNum = {
    length: number;
    width: number;
};

// a converted string type
type AreaInStr = {
    length: string;     // each value is converted manually
    width: string;
};

// a type where it dynamically takes another types, converts its 
// values and put them against each key of that type
type AreaInStrVMap <T> = {
    [key in keyof T] : T[key];
};

// type AreaInStrVMap takes a type T, iterates it's keys throuhg [key in keyof T]
// assigns the value of that key by T[key], against that specific key

const area1 : AreaInStrVMap<AreaInNum> = {
    length: 10,
    width: 5,
};

/**
 * const area1: {
    length: number;
    width: number;
    }
 */

// for area1, its type is not specifically defined
// AreaInStrVMap type takes AreaInNum type, iterates the key-value pair 
// of AreaInNum type, and assign that type against area1 dynamically



