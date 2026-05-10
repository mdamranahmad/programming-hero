/**
Task 7: Constant Literal Types HARD
Concepts: as const, typeof, Index Access Types
Scenario: Define fixed theme colors that serve as the single source of truth for your
application.

const Colors = {
Primary: "RED",
Secondary: "BLUE"
} as const;

Instructions:
Create a type ValidColor derived directly from the values of the Colors
object.
Write a function setColor(c: ValidColor) that only accepts "RED" or
"BLUE".

Hint: type ValidColor = typeof Colors[keyof typeof Colors].
 */

const Colors = {
Primary: "RED",
Secondary: "BLUE"
} as const;

type ValidColor = typeof Colors[keyof typeof Colors];

const setColor = (c: ValidColor) => {
    return true;
};

setColor('Green');
setColor('Red');
setColor('RED');
setColor('BLUE');
setColor('blue');