import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../services/product-service";
import type { IProduct } from "../types/product-types";

export const productController = async (req : IncomingMessage, res : ServerResponse) => {
    const url = req.url;
    const urlArr : string[] | undefined = url?.split('/').filter(Boolean);
    const method = req.method;

    const products = readProduct();
    const productId  = urlArr?.[urlArr?.length - 1];
    const product = products.find((p : IProduct) => p.id === productId);
 
    productId === 'products' && method === 'GET' ?
        (res.writeHead(200, {'Content-Type' : 'application/json',}).
        end(JSON.stringify({
            message : 'This is product landing page.',
            data: products,    
        }))) :
            method === 'GET' && product ?
                (res.writeHead(200, {'content-type' : 'application/json'}))
                    .end(JSON.stringify({
                        message: `Product ${productId} is retrieved`,
                        data: product,
                    })) :
                        (res.writeHead(200, {'content-type' : 'text/plain'}))
                    .end(JSON.stringify({
                        message: 'ERROR 404 !! Not Found',
                    })) ;
};