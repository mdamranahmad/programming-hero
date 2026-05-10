// Class and Object
// Class is the fundamental building block of Object Oriented Programming



// let declare a class
class Animal {      // class keyword denotes a class declaration
    name: string;   // each class has some properties
    species: string;    // name, species, sound are properties for class Animal
    sound: string;
}
    

/**
 * Error Message
 * Property 'name' has no initializer and 
 * is not definitely assigned in the constructor.ts(2564)
    (property) Animal.name: string
 */
// keys of class Animal are parameters, has to be received by constructor


class Animal0 {
    name: string;   
    species: string;    
    sound: string;

    constructor (name :string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The animal is making ${this.sound} sound`);
    }
};

// constructor is used to initialize the properties
// constructor must be given with the properties as param
// this keyword denotes the properties initialized/ declared for said class
// proerties are defined using constructor
// methods are defined using function

const dog = new Animal0('Mr Dog', 'K9', 'Bark');

// new keyword create a new object using the given class
// value against each param is given as arguments to the new Class

dog.name;   // properties of class Animal0 is now accessible for dog object through dot notation
dog.sound;
dog.species;

console.log(dog.name);

const cat = new Animal0('cat', 'Persian', 'Mew');

console.log(cat);
// output - Animal0 { name: 'cat', species: 'Persian', sound: 'Mew' }

cat.makeSound();
// output - The animal is making Mew sound

// parameter properties
// a facility provided by typescript for clean class defination

class Animal1 {
    
    constructor (public name : string, 
        public species: string, 
        public sound: string) { }

    makeSound() {
        console.log(`The animal is making ${this.sound} sound`);
    }
};

// for a class, every property is a public property as it can accessed from outside using dot notaion
// using public keyword as param in constructor makes a clean code
// no need to re-declare properties once inside class and again inside constructor


const horse = new Animal1('Horse', 'Royal', 'RhiRhi');

horse.makeSound();