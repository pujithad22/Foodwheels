var express = require('express');
var app = express();
var bodyParser=require("body-parser");
var ls=require("localStorage")
var mongoose=require("mongoose");
var  url= "mongodb://127.0.0.1:27017/foodwheels";
mongoose.Promise=global.Promise;
mongoose.connect(url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.engine('html',require('ejs').renderFile);
app.set("view engine","html");

var schema = new mongoose.Schema({
    urlimage:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

var t=mongoose.model("cartitem",schema);


app.get("/",(req,res)=>{
    res.render("index.html");
})
app.get("/add",(req,res)=>{
    mongoose.connect(url,function(err,db){
        db.collection('cartitems').find().toArray(function(err,i){
            if(err)
                return console.log(err);
            res.render("cart.html",{dbarr:i});    
        })
   })
    
    
})
app.get("/cart",(req,res)=>{
    console.log("cart",req.body.para,req.body.cart);
    //console.log("abwjh is :"+retrievedData1);
    var text = req.query.para.split(',');
    var image = req.query.cart.split(',');
    console.log("length of text array is : "+text.length);
    console.log("length of image array is : "+image.length);
    mongoose.connect(url,function(err,db){
       for(var i=0;i<text.length;i++){
       db.collection("cartitems").insertOne({

           urlimage:image[i],
           name:text[i]
       })
    }
   })
   res.redirect("/add");
  

})
app.listen(4002,(req,res)=>
{
    console.log("listening to 4002");
})