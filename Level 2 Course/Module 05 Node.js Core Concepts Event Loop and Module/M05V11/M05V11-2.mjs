// import a from './M05V11-1.mjs';     //  imported from default export

// import {a} from './M05V11-1.mjs';     //  we have to destructure if we want to import from direct export

import {a as value} from './M05V11-1.mjs';     //  we have to destructure if we want to import from direct export



// console.log(a); //  output- 1000

// for direct export, name alis does not work
// as keyword is used for renameing in case of direct export
console.log(value);     // output- 1000



