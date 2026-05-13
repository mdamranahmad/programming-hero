// Single Threaded vs MultiThreaded Servers

// Client Server Architecture

// Client Request - Server Response through Json 

// Multiple client can use same server

// What servers can do  -   Input output intensive task
//                      -   CPU Intensive task

// Node.js is single threaded   -   Second task waits until first task is done

// Multithreaded server         -   Second task and first task both can run simultaneously
//      -   Limitations         -   
//      -       -   OverCome Limitations    -   Horzontal Scalling  -   Add Instance    
//      -       -                           -   Vertical Scalling   -   Increase the size (CPU, RAM)
//      -   Cost is  major issue

//  How Node.js can handle multiple re request?
//      -   Thread Pooler   -   Once server receives a request, it sends that request to Threadpool
//                          -   Thread pool takes it to database, database send it back to threadpool
//                          -   Threadpool sends that response to server
//      -   Libuv           -   Asynchronus operation   -   Event loop

//  Node.js slows down or crash while it is given CPU intensive task

//  Recently, node.js allows multithread operation, and cpu intensive task