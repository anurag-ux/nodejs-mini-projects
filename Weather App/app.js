const express = require('express')
const { static } = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
var location=""
app.get('/', function(req, res){
    res.render("home.ejs");
})

app.get('/weather',function(req,res){
    res.render("weather.ejs",{
        location:location
    })
})

app.post('/location',function(req,res){
    location=req.body.location;
    res.redirect('/weather')
})
app.listen(port, () => console.log(`Server is running!`))