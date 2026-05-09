// KeyOf Constraints in Generic
// keyOf - type operator

type RichPeoplesVehicles = {
    car: string;
    bike: string;
    autoRickshwa: string;
};

type MyVehicle1 = 'bike' | 'car' | 'autoRickshwa';   // union type with string literal type

// type MyVehicle1 is somewhat part of type RichPeoplesVehicles keys

type MyVehicle2 = keyof(RichPeoplesVehicles); // types are defined with keyOf operator

// const myVehicle : MyVehicle1 = 'bike';          // no error
// const myVehicle : MyVehicle1 = 'car';           // no error
// const myVehicle : MyVehicle1 = 'autoRickshwa';   // no error
// const myVehicle : MyVehicle1 = 'ship';   // ERROR
/*
// error message
Type '"ship"' is not assignable to type 'keyof RichPeoplesVehicles'
*/

// const myVehicle : MyVehicle2 = 'bike';          // no error
// const myVehicle : MyVehicle2 = 'car';           // no error
// const myVehicle : MyVehicle2 = 'autoRickshwa';   // no error

const myVehicle : MyVehicle2 = 'ship';   // ERROR

/*
// error message
Type '"ship"' is not assignable to type 'keyof RichPeoplesVehicles'
*/

const user : User1 =  {
    id: 222,
    name: "Mr M",
    address: {
        city: "Syl",
    },
};

// const myId = user.id;       // Dot Notation to access key of an object
const myId = user['id'];       // Square Bracket Notation to access key of an object
const myName= user['name'];
const myAddress = user['address'];

// console.log(myId, myName, myAddress);

// output
// 222 Mr M { city: 'Syl' }

console.log({myId, myName, myAddress});

// output
// { myId: 222, myName: 'Mr M', myAddress: { city: 'Syl' } }

const getPropFromObj = (obj : object, key: string) => {
    return obj[key];                                        // ERROR    
};

/*
// Error Message
Element implicitly has an 'any' type because expression of 
type 'string' can't be used to index type '{}'.
  No index signature with a parameter of type 'string' 
  was found on type '{}'.ts(7053)
*/

const result = getPropFromObj(user, "name");        // working pretty well, thorugh there is an error message on line 60
const resultNew = getPropFromObj(user, "Salary");        // key not available on object, still no error message

console.log(result);

// output
// Mr M

type User1 =  {
    id: number;
    name: string;
    address: {
        city: string;
    },
};


const getPropFromObj1 = (obj : User1, key: keyof User1) => {
    return obj[key];                                     // no error     
};

const resultNew1 = getPropFromObj1(user, "name");        // working pretty well, error message issue resolved
const resultNew2 = getPropFromObj1(user, "Salary");      // error, key does not exist

const product = {
    type : 'Laptop',
    brand: 'HP',
    model: 'Y24',
}

const resultNew3 = getPropFromObj1(product, "brand");   // ERROR Message

// getPropFromObj1 is not generalized, only available for User1 Type
/*
Argument of type 
'{ type: string; brand: string; model: string; }' 
is not assignable to parameter of type 'User1'.
  Type '{ type: string; brand: string; model: string; }' 
  is missing the following properties from type 
  'User1': id, name, addressts(2345)
*/



// Generic Declaration, workable for any kind of object
const getPropFromObj2 = <X> (obj : X, key: keyof X) => {
    return obj[key];                                     // no error     
};

const std = {
    id: 123,
    class: 'Four',
}
// working for any kind of object
const resultNew4 = getPropFromObj2(product, "brand"); 
const resultNew5 = getPropFromObj2(user, "name"); 
const resultNew6 = getPropFromObj2(user, "Salary");  
const resultNew7 = getPropFromObj2(std, "id");  
