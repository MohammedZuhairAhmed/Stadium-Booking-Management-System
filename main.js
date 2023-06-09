const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9000;
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",(req,res)=>{
    const data = req.body;

    console.log(req.body);
})

app.listen(PORT,() =>{
    console.log(`Listening at port ${PORT}`);
})