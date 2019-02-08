var express = require('express');
var app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.engine('html',require('ejs').renderFile);
app.set("view engine","html");
app.get("/",(req,res)=>{
    res.render("index.html");
})
app.get("/cart",(req,res)=>{

res.render("cart.html");
})
app.listen(4002,(req,res)=>
{
    console.log("listening");
})