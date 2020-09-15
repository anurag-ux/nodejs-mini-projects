const express = require('express')
const { static, response } = require('express')
const bodyParser = require('body-parser')
const request=require('request');

const app = express()
const port = 3000
const base="http://api.openweathermap.org/data/2.5/weather?APPID=4ee4236d370e0116fe0e87f937f90445&zip="
const pin="https://api.postalpincode.in/pincode/"

app.use(static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
var zip="";
var country="";
var url="";
var pinUrl="";
var temp=0.0;
var city="";
var weather="";
var data;

app.get('/', function(req, res){
    res.render("home.ejs");
})

app.get('/weather',function(req,res){
    request(pinUrl,(error,response)=>{
        data=JSON.parse(response.body);
        if(data["cod"]=="404"){
            res.redirect("/error");
        }else{
            city=data[0]["PostOffice"][0]["District"]+", "+data[0]["PostOffice"][0]["State"]
            res.render("weather.ejs",{
                weather:weather,
                temp:temp,
                city:city
            })
        }
    })
})

app.post('/location',function(req,res){
    zip=req.body.zip;
    country=req.body.country;
    url=base+zip+","+country;
    pinUrl=pin+zip;
    request(url,(error,response)=>{
        data=JSON.parse(response.body);
        if(data["cod"]=="404"){
            res.redirect("/error");
        }else{
            temp=(parseFloat(data["main"]["temp"])-273.15).toFixed(2);
            weather=data["weather"][0]["main"];
            res.redirect('/weather');
        }
    });
})

app.get("/error",(req,res)=>{
    res.render("error.ejs");
})

app.listen(port, () => console.log(`Server is running!`))