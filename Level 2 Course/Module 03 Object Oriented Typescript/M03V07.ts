// Static in Typescript

// create another class
class Counter {
    count: number = 0;  // count is initialized with a default value, without constructor

    increment() {
        return this.count += 1;
    }

    decrement() {
        return this.count -= 1;
    }

}

// const instance1 = new Counter();        // hold its own memory

// console.log(instance1.increment());     // output- 1
// console.log(instance1.increment());     // output- 2
// console.log(instance1.increment());     // output- 3

// const instance2 = new Counter();        // hold its own memory
// console.log(instance2.increment());     // output- 1
// console.log(instance2.increment());     // output- 2
// console.log(instance2.increment());     // output- 3
// console.log(instance2.increment());     // output- 4

// here instance1 and instance2 are holding separate memory for each of them
// instance1 and instance2 are holding dynamic memory

// what if instance1 and instance2 need to hold a static memory, where both of them will
// have a common memory to store and use data?

class Counter1 {
    static count: number = 0;  // static keyword make count to be stored in a single place
    // no matter how instance are there
    // count is now attached to Counter1 only

    increment() {
        // return this.count += 1;         // for static property, this.property does not work
        return Counter1.count += 1;
    }   

    decrement() {
        // return this.count -= 1;
        return Counter1.count -= 1;
    }

}

const instance3 = new Counter1();        // hold its own memory

// console.log(instance3.increment());     // output- 1
// console.log(instance3.increment());     // output- 2
// console.log(instance3.increment());     // output- 3

const instance4 = new Counter1();        // hold its own memory
// console.log(instance4.increment());     // output- 4
// console.log(instance4.increment());     // output- 5
// console.log(instance4.increment());     // output- 6
// console.log(instance4.increment());     // output- 7

console.log(instance3.increment());     // output- 1
console.log(instance4.increment());     // output- 2
console.log(instance4.increment());     // output- 3
console.log(instance3.increment());     // output- 4
console.log(instance4.decrement());     // output- 3
console.log(instance3.decrement());     // output- 2