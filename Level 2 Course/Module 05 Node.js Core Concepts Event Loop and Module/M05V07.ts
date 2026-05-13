//  How Event Loop Works

//  Node.js follows Event Driven Architecture
//      Event -- Event Loop --  Callback function

//  Stages of Event Loop    -   Start
//                          -   Generation of a callback queue
//                              -   checks if there is any request
//                              -   Checks for Expired Timer Callbacks
//                              -       -   looks for setTimeout, takes it first and solve
//                              -   Input Output Pooling and Callbacks
//                              -   setImmediate Callbacks
//                              -   Close Callback
//                          -   process.nextTick() Queue
//                          -   Other Microstack Queue