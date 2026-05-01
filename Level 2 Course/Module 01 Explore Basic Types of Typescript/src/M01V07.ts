// function
// regular function, arrow function

function add (num1, num2) {     // function parameter does not have defined type
    return num1 + num2;         // implicit - any
}

function add1 (num1: number, num2: number) {     // will return number implicitly
    return num1 + num2;         
}

function add2 (num1: number, num2: number) : number {     // return type explicitly defined
    return num1 + num2;         
}


const add3 = (num1, num2) => num1 + num2;

const add4 = (num1: number, num2: number): number => num1 + num2;

// method declaration
const user = {
    name : "Amran",
    balance : 0,
    addBalance(value: number) : number {
        return this.balance + value;
    }
}

// callback function - defining function inside a loop

const arr : number[] = [1, 4, 6];

const sqrArr = arr.map((e : number): number => e *e);