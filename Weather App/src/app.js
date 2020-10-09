//dependancies
const express = require('express')
const { static, response } = require('express')
const bodyParser = require('body-parser')
const request=require('request');
const path=require('path');
const { Console } = require('console');

const app = express()
const port = 3000

//paths
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../views');

app.use(static(publicPath)) //for static css and js
app.use(bodyParser.urlencoded({ extended: false })) //to parse body string

//view engine
app.set("view engine","ejs"); //for dynamic content
app.set("views",viewsPath);

//variables
var location="https://api.weatherbit.io/v2.0/current?,IN&key=a87e76bd1d654e758325702ad0886d41&city=";
var city="";
var country="";
var temp=0.0;
var city="";
var weather="";

app.get('/', (req, res)=>{
    res.render("home");
})

app.get('/weather',(req,res)=>{
    res.render("weather",{
        weather:weather,
        temp:temp,
        city:city
    })
})

app.post('/location',({body:responseBody},res)=>{
    city=responseBody.city.toLowerCase();
    country=responseBody.country;
    location=location+city+','+country;
    request(location,(error,response)=>{
        if(error || response.body.length===0){
            res.redirect("/error");
        }
        else{
            data=JSON.parse(response["body"]);
            city=(data["data"][0]["city_name"]);
            weather=(data["data"][0]["weather"]["description"]);
            temp=(data["data"][0]["temp"]);
            res.redirect('/weather');
        }
    });
})

app.get("/error",(req,res)=>{
    res.render("error");
})

app.listen(port, () => console.log(`Server is running!`))