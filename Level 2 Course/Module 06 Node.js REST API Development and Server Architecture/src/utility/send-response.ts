import type { ServerResponse } from "node:http";

export const sendResponse = (res : ServerResponse, statusCode: number, success : Boolean, message: string, data? : any) => {
    const response = {
        success : success,
        statusCode : statusCode,
        message : message,
        data : data,

    };
    res.writeHead(statusCode, {"content-type" : 'application/json'})
        .end(JSON.stringify(response));
} ;