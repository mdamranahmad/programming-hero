// Use As Const Instead of Enum
// enum, while transpiled into js, increase the bundle size
// as constant assertion


// enum UserRoles2 {           
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }
// Userroles2.Admin = "Anything";       // Error, enum does not permit re-assignment

const UserRoles2 = {           
    Admin : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer',
}

UserRoles2.Admin = 'Anything';      // no error, js obj permits re-assignment
                                    // not desirable


const canEdit2 = (role: UserRoles2) => {     // ERROR
    /*
    // Error Message
    'UserRoles2' refers to a value, but is being used as a type here.
    Did you mean 'typeof UserRoles2'?ts(2749)
    */   
    return role === UserRoles2.Admin || role === UserRoles2.Editor ?    // UserRoles1 is being accessible as value
        true :
            false;
};

const isEditPermissble2 = canEdit2(UserRoles2.Admin);

// console.log(isEditPermissble1);

const UserRoles3 = {           
    Admin : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer',
} as const;                     // enum is replaced with as const

/**
 * as const uses read-only modifier to prevent any modification
 * background-
 * const UserRoles3 = {           
    readonly Admin : 'Admin',
    readonly Editor : 'Editor',
    readonly Viewer : 'Viewer',
    };  
 */

UserRoles3.Admin = 'Anything';      // ERROR
                                    // Very much acceptable
/*
// Error Message
Cannot assign to 'Admin' because it is a readonly property.ts(2540)
(property) Admin: any
*/

// const canEdit3 = (role: UserRoles3) => {     
    /**
     * Error Message
     * 'UserRoles3' refers to a value, but is being used as a type 
     * here. Did you mean 'typeof UserRoles3'?ts(2749)
    */
const canEdit3 = (role: keyof typeof UserRoles3) => {  
    /**
     * behind the scene function of typeof operator
     * const UserRoles3: {
        readonly Admin: "Admin";
        readonly Editor: "Editor";
        readonly Viewer: "Viewer";
        }
     *  */   
    return role === UserRoles3.Admin || role === UserRoles3.Editor ?    // UserRoles1 is being accessible as value
        true :
            false;
};

const isEditPermissble3 = canEdit3(UserRoles3.Admin);

// console.log(isEditPermissble3);

const UserRoles4 = {           
    Admin : 'ADMIN',
    Editor : 'EDITOR',
    Viewer : 'VIEWER',
} as const;

const canEdit4 = (role: typeof UserRoles4[keyof typeof UserRoles4]) => {   
    return role === UserRoles4.Admin || 
        role === UserRoles4.Editor ?    // UserRoles1 is being accessible as value
            true :
                false;
};

const isEditPermissble4 = canEdit4(UserRoles4.Admin);   // ERROR
/**
 * Argument of type '"ADMIN"' is not assignable to parameter of 
 * type '"Admin" | "Editor" | "Viewer"'.ts(2345)
 * (property) Admin: "ADMIN"
 */
console.log(isEditPermissble4);