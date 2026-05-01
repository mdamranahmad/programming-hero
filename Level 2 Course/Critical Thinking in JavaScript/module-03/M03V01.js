// Stateless vs Stateful
// Stateful - that can hold data for multiple iteration
// object is stateful
// Stateless - that can not hold data through iteration
// function is stateless

const counter = (amount) => {
    let count = 0;
    count += amount;
    return count;
};

console.log(counter(3));
console.log(counter(2));    // stateless - does not hold data of previous operation
// lexical environment - the environment created inside curly braces {}
// holds variable inside curly environment, return a referemce to outer world
// environment gets destroyed once the operation is complete

const counterObj = {
    count: 0,
    add (amount) {
        this.count += amount;
    },
    print() {
        console.log(this.count);
    } 
};

counterObj.add(2);
counterObj.add(3);
counterObj.print();


