// Basic Class Constructor and Methods Refresher

// convert stateless function into stateful function


let count = 0;
const counter = (amount) => {
    count += amount;
    return count;
};

// console.log(counter(3));
// console.log(counter(2));   

// Object Oriented Programmin
// Function Programming - every function should a pure function
// Pure Function - That returns same output every time executes


// a solution is Closure Creation
// closure cration - create a function under a variable

const createCounter = () => {
    let count = 0;
    return (amount) => {
        count += amount;
        return count;
    };
};

const counter1 = createCounter(); // construct a variable

console.log(counter1(3));
console.log(counter1(5));

// Object Oriented Programming - Class Construction

class Counter {
    constructor(count) {
        this.count = count;      // this prefix tells that it comes from inside of its own lexical environment
        // count1 = count1;         // comes from outer world
    }
    add(amount) {
        this.count += amount;
    }
    print() {
        console.log(this.count);
    }
}

const counter2 = new Counter(0);

counter2.print();
counter2.add(5);
counter2.print();
counter2.add(8);
counter2.print();

