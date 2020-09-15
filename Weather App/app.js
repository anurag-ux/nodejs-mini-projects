const express = require('express')
const { static } = require('express')
const bodyParser = require('body-parser')
const request=require('request');

const app = express()
const port = 3000

app.use(static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
var zip=0;
var country="";

app.get('/', function(req, res){
    res.render("home.ejs");
})

app.get('/weather',function(req,res){
    res.render("weather.ejs",{
        zip:zip,
        country:country
    })
})

app.post('/location',function(req,res){
    zip=req.body.zip;
    country=req.body.country;
    res.redirect('/weather')
})

app.listen(port, () => console.log(`Server is running!`))