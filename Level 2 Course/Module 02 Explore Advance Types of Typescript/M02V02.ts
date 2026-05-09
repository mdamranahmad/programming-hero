// type interface
// similar to type alias

type User = {               // type declaration
    name : string;          // semi-colon after defination. not comma
    age : number;
};

interface IUser {           // same as type alias, lacks equal sign after naming
    name : string;          // start with curly braces after name decalration
    age : number;           // works only with object type data (object, array, function)
};                          // does not works with primitive data

type IsAdmin = boolean;     // primitive data type, workable with type alias by assigning equal sign
                            // not workable with type interface

type Role = {
    role : 'admin' | 'user';    // semi-colon after defination. not comma
};

type UserWithRole = User & Role;    // type intersection, merging different type into one

interface IUserWithRole extends IUser { // interface extension, adding primitive data to interface
    role : 'admin' | 'user';
};

const user1 : User = {      // type alias
    name : "Mr. X",
    age : 100,
};

const user2 : User = {      // type alias
    name: "Mr. Y",
    age : 80,
};

const user3 : UserWithRole = {
    name : 'Mr. Z',
    age : 95,
    role : 'user',
}

const user4 : IUser = {            // assigning type interface 
    name : 'Mr. A',
    age : 35,
};

const user5 : IUserWithRole = {     // application of interface extension
    name : 'Mr. B',
    age : 40,
    role : 'user',
};

// application of interface for function
type Add = (num1 : number, num2 : number)  => number;

const add : Add = (num1, num2) => {     // defining function through type alias
    return num1 + num2;
}; 

interface IAdd {
    (num1 : number, num2 : number) : number 
}

const iadd : IAdd = (num1, num2) => num1 + num2;

const friends : string[] = ['A', 'B', 'C'];

type Friends = string[];        // alternate declaration for line 67

const friends1 : Friends = ['A', 'B', 'C']; // alternate declaration for line 67

interface IFriends {
    // string[];       //  showing error
    [index : number] : string;  // keyword inside square bracket, index denotes the type of indexing as numbers, aka index signature
                                // string keyword outside square bracket the type of value those indexes hold
}

// array is a special type of object, where indexes are key and there values are items hold by these indexes
/*
['A', 'B', 'C' ] = {
    0 : 'A',
    1 : 'B',
    2 : 'C',
}
*/

const friends2 : IFriends = ['A', 'B', 'C'];