/**
Task 2: Merging User Profiles 
Concepts: Intersection Types (&)
Scenario: A user signs up as a basic Person, but when hired, they gain
JobDetails. An Employee is a union of both.

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

Instructions:
Create a new type Employee that combines Person and JobDetails.
Write a function getProfile that accepts an Employee.
Return a string: "Name: [name], Role: [role]".
Hint: Use the & operator to merge the two types.
 */

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

/**
 type Employee = {
    name: string;
    age: number;
} & {
    role: string;
    salary: number;
}
 */

const employee : Employee = {
    name: 'Mr X',
    age: 20,
    role: 'Intern',
    salary: 5,
};

// a function that accepts an employee object
// Returns a string: "Name: [name], Role: [role]"
const getProfile = (e : Employee) : string => {
    return `Name: ${e.name}, Role: ${e.role}`;
};

console.log(getProfile(employee));
// output - Name: Mr X, Role: Intern
