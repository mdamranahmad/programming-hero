"use strict";
// Explore Enum
// Enum is available in c, c#, python but not in js
// Enum - defines set of fixed string literals in one place
// a function that can define whether that role is able to edit or not, and also will be used as value
const canEdit = (role) => {
    // UserRoles ?         // UserRoles is not accessable as a value
    return role === 'Admin' || 'Editor' ?
        true :
        false;
};
const isEditPermissble = canEdit('Admin');
console.log(isEditPermissble);
// 'Admin' is fixed string literal, have to put mannually every where being used
// chances of error is high
// Enum is the solution
// string literals are used as a set, accessible through dot notation
// Enum is a type that can be used as a value
// enum is a object of key-value pair, where colon (:) is replaced by equal (=) sign 
var UserRoles1;
(function (UserRoles1) {
    UserRoles1["Admin"] = "Admin";
    UserRoles1["Editor"] = "Editor";
    UserRoles1["Viewer"] = "Viewer";
})(UserRoles1 || (UserRoles1 = {}));
const canEdit1 = (role) => {
    // return role === UserRoles1.Admin || UserRoles1.Editor ?     // Error
    /*
    // Error Message
    This condition will always return 'true'.
    */
    return role === UserRoles1.Admin || role === UserRoles1.Editor ? // UserRoles1 is being accessible as value
        true :
        false;
};
const isEditPermissble1 = canEdit(UserRoles1.Admin);
console.log(isEditPermissble1);
/*
// Error
SyntaxError [ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX]:
TypeScript enum is not supported in strip-only mode
*/
/*
// solution
usage of --experimental-transform-types flag
node --experimental-transform-types  m02v08.ts

// output
true
*/
