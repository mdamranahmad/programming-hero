/*
Task 9: The Wrapper HARD
Concepts: Conditional Types
Scenario: Create a type that acts as a logic gate, returning "Large" for arrays and
"Small" for anything else.
Instructions:
Create a type DataType<T>.
If T extends an array, the type should be "Large".
Otherwise, it should be "Small".

Hint: Use the ternary syntax: T extends any[] ? "Large" : "Small".
*/

type DataType <T> = T extends any[]?
    'Large' :
        'Small';

type Result1 = DataType<string[]>; // "Large"
type Result2 = DataType<number>;   // "Small"
type Result3 = DataType<{ id: number }>; // "Small"
type Result4 = DataType<[string, number]>; // "Large"