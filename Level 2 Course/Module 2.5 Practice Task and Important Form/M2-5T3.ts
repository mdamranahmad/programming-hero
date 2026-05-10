/**
Task 3: The "Safe" Data Fetcher MEDIUM
Concepts: Optional Chaining (?.), Nullish Coalescing (??)
Scenario: API responses can be unpredictable. You need to safely access a deep
property without causing a crash.

type UserResponse = {
info?: {
address?: {
zipCode?: string;
}
}
};

Instructions:
Write a function getZipCode that reaches deep into the object.
If any part of the path is missing, or if the zipCode is null/undefined, return
"00000".

Hint: Chain ?. for every level and end with ?? "00000".
 */

type UserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};

const getZipCode = (U : UserResponse) : string => {
    return U.info?.address?.zipCode ?? "00000";     
    // ?. - optional chaining, checks if the properties is available
        // if true, moves to next level, do nothing if false
    // ?? - Nullish Coalescing, checks if the property is null
        // if true, returns default value, do nothing if false
};

const userResponse1 : UserResponse= {
    info: {
        address: {
            zipCode: "3100",
        }
    }
};

const userResponse2 : UserResponse= {
    info: {
        address: {
        }
    }
}; 

const userResponse3 : UserResponse= {
    info: {
    }
}; 

const userResponse4 : UserResponse= {
    
}; 

console.log(getZipCode(userResponse1));
console.log(getZipCode(userResponse2));
console.log(getZipCode(userResponse3));
console.log(getZipCode(userResponse4));
