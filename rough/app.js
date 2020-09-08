const express = require('express');
const e = require('express');
const app = express()
const log=console.log;
const port = 3000

app.get("/",function(req,res){
    res.send("Hi welcome to my app!");
});

app.get("/speak/:animal",function(req,res){
    var animal=req.params.animal.toLowerCase();
    var sound;
    if(animal==="pig"){
        sound="Oink";
    }else if(animal==="cow"){
        sound="Moo";
    }else{
        sound="Woof Woof!";
    }
    res.send("The "+animal+" says "+sound);
})

app.get("/repeat/:word/:number",function(req,res){
    var word=req.params.word;
    var n=parseInt(req.params.number);
    var print="";
    for(var i=0;i<n;i++){
        print +=word+" ";
    }
    res.send(print);
})

app.get("*",function(req,res){
    res.send("Sorry, page not found!");
})

app.listen(port,function(){
    log("app running on server")
});
