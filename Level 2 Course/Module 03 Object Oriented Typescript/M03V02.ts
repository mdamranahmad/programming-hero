// Inheritance, the 1st Pillar of OOP
// Transfer of properties of a parent class into a child class
/*
// A Student Class
class Student  {
    name: string;
    age: number;
    address: string;

    constructor (name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHr: number) {
        console.log(`${this.name} sleeps for ${numOfHr} hrs.`);   // keyword this denotes that the property is inside that class
    }
}

// create a student object using class Student
const student1 = new Student("Mr A", 18, "Sylhet");

// student1 inherited all the properties from class Student
student1.getSleep(5);
// output- Mr A sleeps for 5 hrs.

// Another class
class Teacher  {
    name: string;
    age: number;
    address: string;
    designation: string; // another extra property

    constructor (name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }

    getSleep(numOfHr: number) {
        console.log(`${this.name} sleeps for ${numOfHr} hrs.`);   // keyword this denotes that the property is inside that class
    }

    takeClass(numOfHrs: number) {
        console.log(`${this.name} takes a ${numOfHrs} hrs long class.`)
    }
}

// create a teacher object from class Teacher
const teacher1 = new Teacher("Mr Teacher", 35, "Sylhet", 'Senior Teache');

teacher1.takeClass(2);
// output- Mr Teacher takes a 2 hrs long class.

// both Student and Teacher has some common properties
// class Teacher has few more unique properties and method
// 
*/

// lets define a parent class
class Parent {
    name: string;
    age: number;
    address: string;

    constructor (name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHr: number) {
        console.log(`${this.name} sleeps for ${numOfHr} hrs.`);   // keyword this denotes that the property is inside that class
    }
}

// lets comment out previous Student and Teacher, and create them agian, but differently
// line 03-60 has been commented

class Student extends Parent {}     // keyword exteneds help class Student to inherit properties of class Parent

class Teacher extends Parent {
    designation: string; // another extra property

    constructor (name: string, age: number, address: string, designation: string) { // constructor Parent(name: string, age: number, address: string): Parent
        super(name, age, address);         // Constructors for derived classes must contain a 'super' call.
        this.designation = designation;
    }

    takeClass(numOfHrs: number) {
        console.log(`${this.name} takes a ${numOfHrs} hrs long class.`)
    }
}

// create a student object using class Student
const student1 = new Student("Mr A", 18, "Sylhet");

student1.getSleep(2);       // Class Student is not explicitly defined, still student1 got all it's properties and method

// create a teacher object from class Teacher
const teacher1 = new Teacher("Mr Teacher", 35, "Sylhet", 'Senior Teache');

teacher1.getSleep(10);
// output- Mr Teacher sleeps for 10 hrs.
// test line
