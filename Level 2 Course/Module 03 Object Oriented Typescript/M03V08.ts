// Polymorphism, the 2nd pillar of OOP
// how same method of a class act differently as per class
// OOP has four pillar- inheritance, polymorphism, abstraction and encapsulation

class Person2 {
    getSleep() {
        console.log(`I am a normal happy person. I sleep for 8 Hrs`);
    }
}

class Student2 extends Person2 {
    getSleep() {
        console.log(`I am a streesed student, I sleep for 7 Hrs`);
    }
}

class NextLevelDev extends Person2 {
    getSleep() {
        console.log(`I am a Next Level Developer, I sleep for 4 Hrs`);
    }
}

const getSleepingHrs = (param: Person2) => {
    param.getSleep();
}

const person3 = new Person2();
const student3 = new Student2();
const dev3 = new NextLevelDev();

getSleepingHrs(person3);        // output- I am a normal happy person. I sleep for 8 Hrs
getSleepingHrs(student3);       // output- I am a streesed student, I sleep for 7 Hrs
getSleepingHrs(dev3);           // output- I am a Next Level Developer, I sleep for 4 Hrs

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius : number; 
    
    constructor (radius: number) {
        super();
        this.radius = radius;
    }
    getArea() : number {
        return Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}

const getArea = (param: Shape) => {
    console.log(param.getArea());
};


const shape1 = new Shape;
const shape2 = new Circle(10);
const shape3 = new Rectangle(8, 4);

getArea(shape1);        // 0
getArea(shape2);        // 31.41592653589793
getArea(shape3);        // 32
