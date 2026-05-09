// Generics with function
// functions are basic building blocks
// generics mostly used with function

// Generic Function
const createArrayWithString = (value : string) => [value];

const createArrayWithNumber = (value : number) => [value];

const createArrayWithUserObj = (value : {
    id: string;
    name: string;
}) => {return [value]};

const arrString = createArrayWithString('Apple');
const arrNum = createArrayWithNumber(222);
const arrObj = createArrayWithUserObj({
    id: '123',
    name: 'Next Level',
})

// function with generic
const createArrwithGeneric = <T> (value : T) => [value];    // <T> - receives the dynamic value for function

const arrString1 = createArrwithGeneric('Apple');
const arrNum1 = createArrwithGeneric(222);
const arrObj1 = createArrwithGeneric({
    id: '123',
    name: 'Next Level',
});

console.log(arrString1, arrNum1, arrObj1);

// function, generic and tupple
const createTuppleWGeneric = <X, Y> (param1: X, param2: Y) => [param1, param2];    

const tupple1 = createTuppleWGeneric('Developer', {
    id: 123, salary: 100, level: 'Level 2'
});

console.log(tupple1);

// 

const addStdToCourse = <T> (studentInfo : T) => {
    return {
        course: 'Next level',
        ... studentInfo,
    };
};

const std1 = {
    id: 123,
    name: 'Mr X',
    hasPen: true,
}

const std2 = {
    id: 777,
    name: 'Mr Y',
    hascar: true,
    isMarried: true,
}


console.log(addStdToCourse(std1));
console.log(addStdToCourse(std2));




