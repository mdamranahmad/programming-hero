import { createServer, IncomingMessage, OutgoingMessage, Server, ServerResponse } from "http";
import { routeHandler } from "./routes/route";

// a server is created that will receive two param, type is defined as Server
// every type we are defining here coming from node_module
const server : Server = createServer((req : IncomingMessage, res: ServerResponse) => {
    // console.log(req.url);
    // console.log(req.method);
    routeHandler(req, res);
});

//  server needs to listen, a port number can be declared, followed by a listeningListener
server.listen(5000, () => {
    console.log("Server is running on the port 5000");
});

// we need to run our server
// to run our server, we require npm tsx to be installed by "npm i tsx"

// we skip dev dependencies here as we may require it to run some other places

// we will write some scripts on package.json to run our server
// "dev" : "tsx watch ./src/server.ts",
// we will access this dev property to run our server from the given location via "npm run dev"

// tsx watch ./src/server.ts

// as out server is running on port 5000, we will send a request
// request- localhost:5000

// in terminal we are seeing a response as we created console.log on Ln 7

// we can now try to see the methods on url from 'console.log(req)' to "console.log(req.method)" and "console.log(req.method)"

// output 
/*
Server is running on the port 5000
/
GET
*/


// what if we want to see these on browser rather than on console

// Ln 7-8 is commented

// M06V03 - Better file organization
