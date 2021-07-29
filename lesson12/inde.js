const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.static("view"))

app.get("/",(req,res)=>{
    res.send("Welcome")
});

app.use('/home',(req,res)=>{
    res.sendFile(__dirname + "/view/index.html")
})

app.listen(PORT,()=>{
    console.log(`Server Runs at http://127.0.0.1:${PORT}`);
});