// type alias in typescript
// assigning name to a type to reuse that type

const user1:  {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'male' | 'female',       // type literal
    contactNo: string,
    address: {
        division: string,
        city: string,
    }

}  = {
    id: 1546,
    name: {
        firstName: 'Md Amran',
        lastName: 'Ahmad'
    },
    gender: 'male',
    address: {
        division: 'Sylhet',
        city: 'Sylhet'
    },
    contactNo: '01675 0174'
}

const user2:  {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'male' | 'female',       // type literal
    contactNo: string,
    address: {
        division: string,
        city: string,
    }

}  = {
    id: 1546,
    name: {
        firstName: 'Mrs',
        lastName: 'Ahmad'
    },
    gender: 'female',
    address: {
        division: 'Sylhet',
        city: 'Sylhet'
    },
    contactNo: '01675 0174095'
}


// declaring a type alias
type User = {id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'Male' | 'Female',       // type literal
    contactNo: string,
    address: {
        division: string,
        city: string,
    }
}

const user3 : User = {
    id: 8465,
    name: {
        firstName: 'Mr X',
        lastName: 'Y'
    },
    gender: 'Male',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    },
    contactNo: '987654'
}

// Type Alias in function

type AddFunc = (num1: number, num2: number) => number

const add :AddFunc = ((num1, num2 ) => num1 + num2);