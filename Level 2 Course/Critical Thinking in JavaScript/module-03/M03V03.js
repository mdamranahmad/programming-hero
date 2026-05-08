// Stack Implementation using Array
// Stack Implementation can be done with Array, Linked List
// Array Operation- push, pop, peek

class Stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        this.items.push(value);
    }
    pop(value) {
        return this.isEmpty() ?
                    undefined :
                        this.items.pop();
    }
    peek() {
        return this.isEmpty() ?
                    undefined :
                        this.items[this.items.length - 1];
        
    }
    isEmpty(){
        return this.items.length === 0?
            true :
                false;
    }
    print() {
        console.log(this.items);
    }
    printLifo() {
        console.log(this.items.slice().reverse().join(' => '));
    }
}

const stack = new Stack();

console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.print();
stack.printLifo();
console.log(stack.peek());
console.log(stack.pop());
stack.print();
