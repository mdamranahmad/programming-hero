import type { IncomingMessage, ServerResponse } from "node:http";

export const productController = (req : IncomingMessage, res : ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const product = ;

    url?.startsWith('/products') && method === 'GET' ?
        (res.writeHead(200, {'Content-Type' : 'application/json',}).
        end(JSON.stringify({
            message : 'This is product landing page.',
            data: product,    
        }))) :
            null ;
};