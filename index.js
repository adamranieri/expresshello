const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

let counter = 0;
const id = Math.random();

app.get("/hello", (req,res)=>{
    res.send(`Hello my ID is ${id}  you are vistor number ` + ++counter)
})

app.get("/hola", (req,res)=>{
    res.send(`hola my ID is ${id}  you are vistor number ` + ++counter)
})

app.listen(3000, ()=>console.log("Application started :)"))