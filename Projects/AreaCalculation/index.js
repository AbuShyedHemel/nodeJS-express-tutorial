const express = require("express");
const app =express();
const PORT = 1010;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/views/index.html");
});

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname +"/views/circle.html");
});

app.post('/circle',(req,res)=>{
    const radius = req.body.radius;
    const area = 3.1416* radius *radius;
    res.send(`<h2>Area of Triangle : ${area}<h2>`);
});

app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname +"/views/triangle.html");
});
app.post('/triangle',(req,res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h2>Area of Triangle : ${area}<h2>`);
});

app.listen(PORT,(req,res)=>{
    console.log(`your Server at http://localhost:${PORT} `);
})