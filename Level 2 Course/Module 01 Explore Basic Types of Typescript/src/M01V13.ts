// Nullable, Unknown and Never Tyoes
// nullable types

const getUser = (input : string) => {   
     return input ? `From DB: ${input}` : 'From DB: All User';
}

console.log(getUser(null));     // null is not acceptable as argument

const getUser2 = (input : string | null) => {       // nullable types   
     return input ? `From DB: ${input}` : 'From DB: All User';
}

console.log(getUser2(null));        // null is now an acceptable argument

// Unknown Types

const discountCalculator = (input: unknown) => {
    return typeof(input) === 'number'?
         input * 0.1 :
            typeof(input) === 'string' ?
                Number(input.split(" ")[0]) * 0.1 :
                    'Void';
}

console.log(discountCalculator(100));
console.log(discountCalculator('100 tk'));
console.log(discountCalculator(null));

// void

const throwError = (msg: string) => {
    throw new Error(msg);
}

