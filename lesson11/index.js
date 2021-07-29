const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const myMiddleware = (req,res, next)=>{
    console.log("Moddle ware function");
    req.currentTime = new Date(Date.now());
    next();
};

app.use(myMiddleware);

app.use((req,res,next)=>{
    res.send("Not Found");
})

app.get('/',(req,res)=>{
    console.log(req.currentTime);
    res.send("Hellow Hemel")
});

app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`);
});