// Generics in typescript
// generalize dynamically

// const friends : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];

/*
Cannot redeclare block-scoped variable 'friends'.ts(2451)
M02V02.ts(67, 7): 'friends' was also declared here.
*/

const friendsV03 : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];

const rollNumber : number[] = [4, 7, 11];

const isEligible: boolean[] =[true, false, true];

// anternative declaration 
const friends01V03 : Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];   // Usage of Array constructor

const rollNumber01 : Array<number> = [4, 7, 11];

const isEligible01: Array<boolean> =[true, false, true];

// type generalization using Generic

type GenericArray = Array<string >;
type GenericArray1 = Array<number>;
type GenericArray2 = Array<boolean>;

const friends02V03 : GenericArray = ['Mr. X', 'Mr. Y', 'Mr. Z'];   // Usage of Array constructor

const rollNumber02 : GenericArray1 = [4, 7, 11];

const isEligible02: GenericArray2 =[true, false, true];

// type GenericArrayG <value> = Array<value>;      // type generic
type GenericArrayG <T> = Array<T>;      // type generic, naming convention

const friends03V03 : GenericArrayG<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];   // Usage of Array constructor

const rollNumber03 : GenericArrayG<number> = [4, 7, 11];

const isEligible03: GenericArrayG<boolean> =[true, false, true];

// usage of generic in tupple

type CoOrdinates<X, Y> = [X, Y];

const coordinates: CoOrdinates<number, number> = [20, 30];
const coordinates0: CoOrdinates<string, string> = ['20', '30'];

// usage of generic in array of objects

type GenericInObject <T> = Array<T>;

const userList = [{
    name: 'Mr x',
    age: 22,
},
{
    name: 'Mr Y',
    age: 32,
}];

const userList0 : GenericInObject<{name: string; age: number}> =[{
    name: 'Mr x',
    age: 22,
},
{
    name: 'Mr Y',
    age: 32,
}];
