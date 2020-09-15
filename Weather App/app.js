const express = require('express')
const { static } = require('express')
const bodyParser = require('body-parser')
const request=require('request');

const app = express()
const port = 3000
const base="http://api.openweathermap.org/data/2.5/weather?APPID=4ee4236d370e0116fe0e87f937f90445&zip="


app.use(static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
var zip="";
var country="";
var url="";

app.get('/', function(req, res){
    res.render("home.ejs");
})

app.get('/weather',function(req,res){
    request(url,(error,response)=>{
        const data=JSON.parse(response.body);
        console.log(data);
        const temp=(parseFloat(data["main"]["temp"])-273.15).toFixed(2);;
        res.render("weather.ejs",{
            weather:data["weather"][0]["main"],
            temp:temp
        })
    })
})

app.post('/location',function(req,res){
    zip=req.body.zip;
    country=req.body.country;
    url=base+zip+","+country;
    res.redirect('/weather')
})

app.listen(port, () => console.log(`Server is running!`))