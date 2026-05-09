// Constraints in Typescript
// Rules to enforce during definition

const addStdToCourse1 = <T> (studentInfo : T) => {
    return {
        course: 'Next level',
        ... studentInfo,
    };
};

const std3 = {
    id: 123,
    name: 'Mr X',
    hasPen: true,
}

const std4 = {
    id: 777,
    name: 'Mr Y',
    hascar: true,
    isMarried: true,
}

// function addStdToCourse1 has no rules and regulation
// it will take any object without validation
// lacks any types of bindings while declaring student profile

const std5 = {
    hasWatch: true,
}

console.log(addStdToCourse1(std5));

/*
// output
{ course: 'Next level', hasWatch: true }
*/

const addStdToCourse2 = <T extends {        // T is extended to contain required param
    id: number;                             // id and name is now mandatory param
    name: string;
}> (studentInfo : T) => {
    return {
        course: 'Next level',
        ... studentInfo,
    };
};

// console.log(addStdToCourse2(std5));         // Shows error on std5

/*
// Error Message
Type '{ hasWatch: boolean; }' is missing the following properties 
from type '{ id: number; name: string; }': id, namets(2345)
*/

const std6 = {
    id: 457,
    name: 'Mr M',
    hasWatch: true,
};

console.log(addStdToCourse2(std6));     // no error message 


// clean coding for line 39-47
type Std = {
    id: number;
    name: string;
    dob: string;
    class: string;
}

const addStdToCourse3 = <T extends Std>
    (studentInfo : T) => {
        return {
            course: 'Next level',
            ... studentInfo,
        };
};

const std7 = {
    id: 654,                    // mandatory property
    name: 'Mr A',               // mandatory property
    hasPencil: false,           // extra property
    gender: 'Male',             // extra proeprty
    dob: '01.01.1990',          // extended property
    class: 'Level 2',           // extended property
}

console.log(addStdToCourse3(std7));
