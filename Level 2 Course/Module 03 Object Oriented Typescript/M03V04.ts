// Type Guard Using Instance of
// instace of is used in OOP

// lets define a parent class

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sleepCycle(numOfHrs: number) {
        console.log(`${this.name} sleeps for ${numOfHrs} hrs daily`);
    }
};

// lets derive two child class from Person

class Student0 extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numOfHrs: number) {
        console.log(`${this.name} studies for ${numOfHrs} hrs daily`);
    }    
}

class Teacher0 extends Person {
    constructor(name: string) {
        super(name);
    }

    doTeach(numOfHrs: number) {
        console.log(`${this.name} teaches for ${numOfHrs} hrs daily`);
    }    
}

// lets define a function that receives a user
const getUserInfo0 = (user: Person) => {
    // our function can not decide the actual instances of person
    // it shows common properties of Person which are inherited to child
    user.name
    user.sleepCycle
    // to resolve the issue we use instanceof operator

    user instanceof Student0 ?
        user.doStudy(2) :       // now user gets childs unique proerties alongside parent properties
            user instanceof Teacher0 ?
                user.doTeach(5) : 
                    user.sleepCycle(10);
};  

// lets declare instace of class Student and Teacher by creating user
const student2 = new Student0('Mr Student');

const teacher2 = new Teacher0('Mr Teacher');

const person2 = new Person("Mr Person");

// student2 and teacher2 are both instances of their respective class


// getUserInfo0 in Ln 53 is confused as it can not decide whether student2 is of Student or Teacher
// 

// as we used instanceof , we get result
// lets use the function defined earlier to get user info
getUserInfo0(student2);     // output - Mr Student studies for 2 hrs daily
getUserInfo0(teacher2);     // output - Mr Teacher teaches for 5 hrs daily
getUserInfo0(person2);     // output - Mr Person sleeps for 10 hrs daily


// do things smartly using function guard
/*
// create function
const decidePersonType = (person: Person) => {
    person instanceof Student0 ?
        person.doStudy(2) :
            person instanceof Teacher0 ?
                person.doTeach(5) :
                    person.sleepCycle(10);
};

const getUserInfo1 = (user: Person) => {
    decidePersonType(user);
}; 
*/

// Ln 76-89 is commented because the function declared is a bad function

// const decidePersonType = (person: Person, child: any ) => {
//     return person instanceof child;
// };

const isStudent = (user : Person) => {
    return user instanceof Student0;
}

const isTeacher = (user : Person) => {
    return user instanceof Teacher0;
}

const getUserInfo1 = (user: Person) => {
    isStudent(user) ?
        user.sleepCycle(4) :
            isTeacher(user) ?
                user.doTeach(8) :
                    user.sleepCycle(16);        
};


getUserInfo1(student2);     // output - Mr Student studies for 4 hrs daily
getUserInfo1(teacher2);     // output - Mr Teacher teaches for 8 hrs daily
getUserInfo1(person2);     // output - Mr Person sleeps for 16 hrs daily