import type { IncomingMessage, ServerResponse } from "node:http";
import { insertProduct, readProduct } from "../services/product-service";
import type { IProduct } from "../types/product-types";
import { json } from "node:stream/consumers";
import { parseBody } from "../utility/parse-body";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const urlArr: string[] | undefined = url?.split("/").filter(Boolean);
  const method = req.method;

  const products = readProduct();
  const productId = urlArr?.[urlArr?.length - 1];
  const product = products.find((p: IProduct) => p.id === productId);

  // console.log("Request", req);

  // productId === 'products' && method === 'GET' ?
  //     (res.writeHead(200, {'Content-Type' : 'application/json',}).
  //     end(JSON.stringify({
  //         message : 'This is product landing page.',
  //         data: products,
  //     }))) :
  //         method === 'GET' && product ?
  //             (res.writeHead(200, {'content-type' : 'application/json'}))
  //                 .end(JSON.stringify({
  //                     message: `Product ${productId} is retrieved`,
  //                     data: product,
  //                 })) :
  //                     (res.writeHead(200, {'content-type' : 'text/plain'}))
  //                 .end(JSON.stringify({
  //                     message: 'ERROR 404 !! Not Found',
  //                 })) ;

  if (method === "GET") {
    productId === "products"
      ? res.writeHead(200, { "content-type": "application/json" }).end(
          JSON.stringify({
            message: "This is product landing page",
            data: products,
          }),
        )
      : product
        ? res.writeHead(200, { "content-type": "application/json" }).end(
            JSON.stringify({
              message: `Product ${productId} is retrived!`,
              data: product,
            }),
          )
        : res.writeHead(200, { "content-type": "application/json" }).end(
            JSON.stringify({
              message: "ERROR 404!! Not Found!!!",
            }),
          );
  } else if (method === "POST") {
    if (productId === "products") {
      const body = await parseBody(req);
      // console.log(body);
      const newProduct = {
        id: Date.now().toString(),
        ...body,
      };
      // console.log(newProduct);
      // insertProduct(newProduct);
      products.push(newProduct);
      insertProduct(products);
      // console.log(products);
      res.writeHead(200, { "content-type": "application/json" }).end(
        JSON.stringify({
          message: `Product created succesfully!`,
          data: newProduct,
        }),
      );
    }
  }
};
