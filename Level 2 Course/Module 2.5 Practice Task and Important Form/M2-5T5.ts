/*
Task 5: Generic Constraints MEDIUM
Concepts: Generics, Extends Constraint
Scenario: You want a function that logs the length of various inputs (strings, arrays)
but rejects types that don't have a .length.
Instructions:
Write a generic function logLength<T>(input: T).
Constrain T to ensure it must have a length property of type number.
Return the length value.
Hint: Use <T extends { length: number }>. 
*/

const logLength = <T extends {length: number}> (input : T) : number => {
    return input.length;
};

console.log(logLength('String'));
console.log(logLength('null'));
console.log(logLength(1024));
