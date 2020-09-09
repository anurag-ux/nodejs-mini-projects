const express = require('express')
const { static } = require('express')
const app = express()
const port = 3000

app.use(static("public"))

app.get("/",function(req,res){
    res.render("home.ejs"); 
})

app.get("/view/:name",function(req,res){
    var name=req.params.name; 
    res.render("star.ejs",{
        name:name
    })
});

app.get("*",function(req,res){
    res.send("<h1>Page Not Found</h1>")
})
app.listen(port,function(){
    console.log("Server running at http://localhost:"+port);
})