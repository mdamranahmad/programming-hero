import { createServer, IncomingMessage, OutgoingMessage, Server } from "http";


// a server is created that will receive two param, type is defined as Server
// every type we are defining here coming from node_module
const server : Server = createServer((req : IncomingMessage, res: OutgoingMessage) => {
    console.log(req);
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

