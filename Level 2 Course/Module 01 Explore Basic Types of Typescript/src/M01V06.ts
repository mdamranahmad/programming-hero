// Referance type

// ts implicitly identifies data types
const userName = {
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad"
}

/*
// explicitly declaring data types
const userName = {      // error as same variable declared twice
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad"
}
*/

const userName2 = {      // error resolved by declaring different variable
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad"
}

const userName3 : {
    firstName : string;     // ts syntax
    middleName : string;
    lastName : string;
} = {      
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad"
}

const userName4 : {         // error due to missing property
    firstName : string;     
    middleName : string;
    lastName : string;
} = {      
    firstName : "Md Amran",
    lastName : "Ahmad"
}

const userName5 : {         // error due to missing property
    firstName : string;     
    middleName? : string;   // adding ? after property makes it optional, error resolved
    lastName : string;
} = {      
    firstName : "Md Amran",
    lastName : "Ahmad"
}

const userName6 : {         // error due to missing property
    firstName : string;     
    middleName? : string;   // adding ? after property makes it optional, error resolved
    lastName : string;
} = {      
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad",
}

const userName7 : {         
    firstName : string;     
    middleName? : string;   
    isMarried? : boolean;
} = {      
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad",
    isMarried : "Married"   // error due to type mismatch
}

const userName8 : {         
    firstName : string;     
    middleName? : string; 
    lastName : string;  
    isMarried? : boolean;
} = {      
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad",
    isMarried : true   // error resolved
}

const userName9 : {
    organization : string;         
    firstName : string;     
    middleName? : string; 
    lastName : string;  
    isMarried? : boolean;
} = {    
    organization : "Programming Hero",      // properties are mutable
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad",
    isMarried : true   
}

userName9.organization = "Programming Hero Level 2";
console.log(userName9);

// output
/* 
{
  organization: 'Programming Hero Level 2',
  firstName: 'Md',
  middleName: 'Amran',
  lastName: 'Ahmad',
  isMarried: true
}
  */
/*
const userName10 : {
    organization : "Programming Hero";      // property value is now immutable         
    firstName : string;     
    middleName? : string; 
    lastName : string;  
    isMarried? : boolean;
} = {    
    organization : "Programming Hero level 2",      // error due to property value mismatch
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad",
    isMarried : true   
}
    */

//  literal type- property value used as a type
const userName10 : {
    organization : "Programming Hero";      // property value is now immutable         
    firstName : string;     
    middleName? : string; 
    lastName : string;  
    isMarried? : boolean;
} = {    
    organization : "Programming Hero",      
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad",
    isMarried : true   
}

userName10.organization = "Programming Hero Level 2"        // error due to different property value assignment


// access modifiers
const userName11 : {
    readonly organization : string;      // make the property readonly         
    firstName : string;     
    middleName? : string; 
    lastName : string;  
    isMarried? : boolean;
} = {    
    organization : "Programming Hero",      
    firstName : "Md",
    middleName : "Amran",
    lastName : "Ahmad",
    isMarried : true   
}

userName11.organization = "Programming Hero Level 2"        // can not assign other values as the property is readonly