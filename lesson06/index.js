const http = require('http');
const fs = require('fs');
const { hostname } = require('os');
const port = 8080;
const hostName = "127.0.0.1";

const myServer = http.createServer((req,res)=>{

const handelReadFile = (statusCode,filename) =>{
    fs.readFile(filename,(err,data)=>{
    res.writeHead(statusCode, {"Content-Type":"text/html"});
    res.write(data);
    res.end();
}
);
}
    if(req.url == '/'){
        handelReadFile(200, "./views/index.html");
    }
    else if(req.url == '/contact'){
        handelReadFile(200, "./views/contact.html");
    }
    else if(req.url == '/about'){
        handelReadFile(200, "./views/about.html");
    }
    else{
        handelReadFile(404, "./views/error.html");
    }
});

myServer.listen(port,hostname,()=>{
    console.log(`Your server at http://${hostName}:${port}`);
});