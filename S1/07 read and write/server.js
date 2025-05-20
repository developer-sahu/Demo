const http = require('http');

const server = http.createServer((req , res )=> {
    console.log(req);
    res.end("hello how are you , yes sir ");
});

server.listen (5000);