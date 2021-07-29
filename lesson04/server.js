// http res, req model and status code
const http = require('http');
const port = '8080';
const hostname = '127.0.0.1';

const myServer = http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text\html'});
    res.write('<h1>Server Done</h1>')
    res.end();
});
myServer.listen(port,hostname,()=>{
    console.log(`Your Server at http://${hostname}:${port}`)
})