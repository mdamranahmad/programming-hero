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
  // a variable that split the string and form an array of string, omits the blanks elements
  const urlArr: string[] | undefined = url?.split("/").filter(Boolean);
  const method = req.method;

  const products = readProduct();

  // return the last element of url array
  const productId = urlArr?.[urlArr?.length - 1];

  // returns a specific product from all the product as per given id
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
  // experimeting with GET Method
  if (method === "GET") {
    // if the inquary is about products, return all the products
    productId === "products"
      ? res.writeHead(200, { "content-type": "application/json" }).end(
          JSON.stringify({
            message: "This is product landing page",
            data: products,
          }),
        )
      : product
        ? // if the inquary is about a specific product, retruns that product
          res.writeHead(200, { "content-type": "application/json" }).end(
            JSON.stringify({
              message: `Product ${productId} is retrived!`,
              data: product,
            }),
          )
        : // return ERROR for invalid quary
          res.writeHead(200, { "content-type": "application/json" }).end(
            JSON.stringify({
              message: "ERROR 404!! Not Found!!!",
            }),
          );
    // experimenting with POST Method
  } else if (method === "POST") {
    // when a product is to be added to the database while is product page
    if (productId === "products") {
      // construct a product by combining the individual chunks
      const body = await parseBody(req);
      // console.log(body);
      // a new product object is created
      const newProduct = {
        // creation of a unique product id from Date object, convert the output to string
        id: Date.now().toString(),
        ...body,
      };
      // console.log(newProduct);
      // insertProduct(newProduct);
      // the newly created product is added to product array by array mutation
      products.push(newProduct);
      // the mutated array/the new product list is inserted to database
      insertProduct(products);
      // console.log(products);
      // a visual message to confirm the product creation
      res.writeHead(200, { "content-type": "application/json" }).end(
        JSON.stringify({
          message: `Product created succesfully!`,
          data: newProduct,
        }),
      );
    }
    // experiment with PUT Method, to update a specific product
  } else if (method === "PUT" && productId !== null) {
    // construct a product by combining the individual chunks
    const body = await parseBody(req);

    // returns index of the requested product url
    const index = products.findIndex((p: IProduct) => p.id === productId);
    // console.log("Index: ", index);
    if (index < 0) {
      res.writeHead(404, { "content-type": "application/json" }).end(
        JSON.stringify({
          message: "Product not found!!",
          data: null,
        }),
      );
    }

    // console.log(products[index]);
    // console.log(productId);
    products[index] = { id: productId, ...body };
    insertProduct(products);
    res.writeHead(200, { "content-type": "application/json" }).end(
      JSON.stringify({
        message: `Product ${productId} is updated successfully`,
        data: products[index],
      }),
    );
  }
};
