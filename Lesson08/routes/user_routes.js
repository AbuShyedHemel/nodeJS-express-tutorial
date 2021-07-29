const express = require("express");
const route = express.Router();

route.get("/register",(req,res)=>{
    res.send("I am your register requested server");
    res.end();
});

route.get("/login",(req,res)=>{
    res.send("I am your login requested server");
    res.end();
});

module.exports = route