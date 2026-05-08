// Type Assertion
// 


let anything : any;

anything = 222;

// (anything as number)        // as denotes assertion, wraping them inside parenthesis and adding dot afterwards provides suggestion

const kgToGmConverter = (input : number | string) : string | Number | undefined=> {
    return  typeof input === 'number' ?
                input * 1000 :
                    typeof input === 'string' ?
                        `Converted Output: ${Number(input.split(' ')[0]) * 1000} gm` :
                            'Undefined';

};

const result1 = kgToGmConverter(2) as number;       // type assertion as number
const result2 = kgToGmConverter('2 Kg') as string;  // type assertion as string
const result3 = kgToGmConverter('2 Kg');            // no type assertion

result1.methodsOfString;                            // adding dot previews all available number methods
result2.methodsOfString;                            // adding dot previws all available methods of string
result3.fewerMethods;                               // no assertion, very few preview
console.log(result1);
console.log(result2);