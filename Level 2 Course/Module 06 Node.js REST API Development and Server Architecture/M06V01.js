//  Building Server with Node.js

//  Local Server

//  Running Loacal server using Node.js

// lets initialize our project

npm init -y

// npm - node package module, init - initialize, y- yes to all question

// output-
/*
{
  "name": "module-06-node.js-rest-api-development-and-server-architecture",
  "version": "1.0.0",
  "description": "",
  "main": "M06V01.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
*/

// a file named package.json created to the folder

// for "type": "commonjs", we will change it to use ECMAScript
// for now, type will be removed and will be managed by typescript

// commenting won't works, as comment is not permissiable in json

// now second part is install type script

npm i -D typescript

//  i - , D - Dev Dependencies, contains items that required for development, but not for production

/*
$ npm i -D typescript

added 1 package, and audited 2 packages in 2s

found 0 vulnerabilities
*/

// package.json got updated, a new package-lock.json is created

// now we need a configuration file to instruct our project when to use typescript

npx tsc --init

/**
$ npx tsc --init

Created a new tsconfig.json                                                          
                                                                                  TS 
You can learn more at https://aka.ms/tsconfig
*/

// compilerOptions in tsconfig.json is modifies, root and src is uncommented

// "module": "nodenext", is changed into "module": "esnext", because we want to use the updated version of js

// "types": [], is updated with "types": ["node"],

// "jsx": "react-jsx", is commented as for now we are not using react

// we have to install node types as we don't have these by default

npm install -D @types/node

/*
$ npm install -D @types/node

added 2 packages, and audited 4 packages in 2s

found 0 vulnerabilities
*/

// we have to create a src source foulder, which will have a server.ts file to run the server

// lets create a server on server.ts

// for now, lets continue on server.ts