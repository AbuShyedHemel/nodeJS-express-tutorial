const express = require("express");
//const router = express.Router();
const app = express();
const userRout = require("./routes/user_routes");


app.use("/user",userRout);

app.use("/register",(req,res)=>{
    // res.status(200).json({
    //     message : "I am here",
    //     statusCode : 200,
    // });
    // res.redirect("/");

    res.statusCode = 200;
    res.sendfile(__dirname+"/views/register.html");
});

app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.sendfile(__dirname+"/views/index.html");
});

app.use("/login",(req,res)=>{
    // res.cookie("name","hemel");
    // res.cookie("Age","25");
    res.clearCookie("name");
    res.append("id","125");
    res.end();
});

app.use((req,res)=>{
    res.send("<h1>404 Not found<h1>")
});
// app.post("/",(req,res)=>{
//     res.send("I am post requested About server");
//     res.end();
// });
// app.put("/",(req,res)=>{
//     res.send("I am your put requested server");
//     res.end();
// });
// app.delete("/",(req,res)=>{
//     res.send("I am your delete requested server");
//     res.end();
// });

module.exports = app;