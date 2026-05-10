// Task 1: The "Optional" Shopping Cart
/**
Concepts: Destructuring, Optional Properties, Default Values
Scenario: You are building a checkout system. Users might buy one item by default,
or specify a bulk quantity.

type CartItem = {
name: string;
price: number;
quantity?: number;
};

Instructions:
Write a function calculateTotal that takes a CartItem object.
Use Destructuring to extract properties.
If quantity is missing, ensure the calculation treats it as 1.
Return the total cost (price * quantity).
Hint: Set a default value during destructuring: { quantity = 1 } = item.
 */

type CartItem = {
name: string;
price: number;
quantity?: number;
};

const cartItem : CartItem = {
name: 'Item',
price: 5,
};

const cartItem2 : CartItem = {
name: 'Item',
price: 10,
quantity: 5,
};

const cartItem3 : CartItem = {
name: 'Item',
price: 7,
quantity: 3,
};

const calculateTotal = (C : CartItem) => {
    const {price, quantity = 1} = C;
    return `Total Cost: BDT ${price * quantity}`;
};

console.log(calculateTotal(cartItem));
console.log(calculateTotal(cartItem2));
console.log(calculateTotal(cartItem3));

/**
 * output
 * 
Total Cost: BDT 5
Total Cost: BDT 50
Total Cost: BDT 21
 */