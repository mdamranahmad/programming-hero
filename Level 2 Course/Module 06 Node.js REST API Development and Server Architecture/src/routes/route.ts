import type { IncomingMessage, ServerResponse } from "node:http";
import { productController } from "../controller/product-controller";

export const routeHandler = (req : IncomingMessage, res : ServerResponse) => {
    const url = req.url;
    const method = req.method;

    url === '/' && method === 'GET' ? 
        res.writeHead(200, {'Content-Type' : 'application/json',}).
            end(JSON.stringify({message : 'Welcome to the server!!'})) : 
                url?.startsWith('/products') ?
                    productController(req, res) :
                            res.writeHead(404, {'Content-Type' : 'application/json',}).
                                end(JSON.stringify({message: 'ERROR!!! 404'})) ;
};