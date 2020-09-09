const express = require('express')
const { static } = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",function(req,res){
    res.render("home.ejs"); 
})

var name="";
app.get("/view",function(req,res){
    res.render("star.ejs",{
        name:name
    })
});

app.post("/addStar",function(req,res){
    name=req.body.name;
    res.redirect("/view");
})

app.get("*",function(req,res){
    res.send("<h1>Page Not Found</h1>")
})
app.listen(port,function(){
    console.log("Server running at http://localhost:"+port);
})