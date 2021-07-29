require("dotenv").config();
const express = require("express");
const app = express(0);
const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Hellow");
});

app.listen(PORT,(req,res)=>{
    console.log(`Srver ruuns at http://127.0.0.1:${PORT}`);
})