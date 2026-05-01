// Ternary, Nullish Coalescing & Optional Chaining
// ? : ternary operator - helps in deceision making
// ?? : nulish coalescing operator- works on null, undefined
// ?. : optional chining

const userAge = 21;

const eligibilityTest = (age : number) : string => {
    return age >= 21 ? "eligible" : 'Not Eligible';     // ternary operator
};

// console.log(eligibilityTest(25));

const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light Theme'    // a default value is provided if given value is undefined

// console.log(selectedTheme);

// output
// Light Theme

const userTheme1 = null;

const selectedTheme1 = userTheme1 ?? 'Light Theme'    // a default value is provided if given value is undefined

// console.log(selectedTheme1);

// output
// Light Theme

const userTheme2 = '';

const selectedTheme2 = userTheme2 ?? 'Light Theme'    // a default value is provided if given value is undefined

// console.log(selectedTheme2);

// output
// 

const userTheme3 = 'Dark Mode';

const selectedTheme3 = userTheme3 ?? 'Light Theme'    // a default value is provided if given value is undefined

// console.log(selectedTheme3);

// output
// Dark Mode

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? 
    isAuthenticated :
        'You are Guest!';

const resultWithNullish = isAuthenticated ?? 'You are Guest!';

console.log({resultWithTernary}, {resultWithNullish});  // curly braces provides the result in object format

// output
// { resultWithTernary: 'You are Guest!' } { resultWithNullish: 'You are Guest!' }

const isAuthenticated1 = '';

const resultWithTernary1 = isAuthenticated1 ? 
    isAuthenticated1 :
        'You are Guest!';

const resultWithNullish1 = isAuthenticated1 ?? 'You are Guest!';

console.log({resultWithTernary1}, {resultWithNullish1});  // curly braces provides the result in object format

// output
// { resultWithTernary1: 'You are Guest!' } { resultWithNullish1: '' }


// optional chining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: string;
    }
} = {
    address: {
        city: 'Sylhet',
        town: 'Sylhet'
    }
}

const postalCode = user.address.postalCode;

console.log(postalCode);    // undefined output may cause the system to crash

// output
// undefined


const user2: {
    address: {
        city: string;
        town: string;
        postalCode?: string;
    }
} = {
    address: {
        city: 'Sylhet',
        town: 'Sylhet'
    }
}

const postalCode2 = user2?.address?.postalCode;     // optional chining, output still undefined, but prevent system crashing

console.log(postalCode);    // undefined output may cause the system to crash

// output
// undefined

