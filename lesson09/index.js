const express =  require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// app.get('/userid/:id/userAge/:age',(req,res)=>{
//     app.get("/",(req,res)=>{
//     // const id = req.query.id;
//     // const name = req.query.name;
//     // const id = req.params.id;
//     // const age = req.params.age;

//     const id = req.header('id');
//     const name = req.header('name');
    
//     res.end(`<h1>Server id : ${id} && Name : ${name}<h1>`);
// });
app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/view/index.html");
})

app.post('/register',(req,res)=>{
    const fullName= req.body.fullName;
    const age = req.body.age;
    res.send(`<h1>Your Name is = ${fullName} || Your Age is = ${age}<h1>`);
})

app.post('/user',(req,res)=>{
    const name = req.body.name;
    res.send(`welcome ${name}`);

});

app.listen(port, ()=>{
    console.log(`your server run at http://localhost:${port}`);
})