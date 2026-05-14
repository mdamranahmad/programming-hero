import fs from 'fs';
import path from "node:path";

const filePath = path.join(process.cwd(), "./src/database/db.json");
/*
function path.join(...paths: string[]): string
Join all arguments together and normalize the resulting path.
*/

export const readProduct = () => {
    // console.log(filePath);
    // fs is node file system to read and write file
    const products = fs.readFileSync(filePath, 'utf8'); 
    // fs.readFileSync- reads the file from the given path, utf8 encode the content into human readable form
    // console.log(products.toString());
    // console.log(products);
    return JSON.parse(products);
};

export const insertProduct =(payload : any) => {
    fs.writeFileSync(filePath, JSON.stringify(payload));
};

/*
The process.cwd() method returns the current working directory of the Node.js process.
*/
