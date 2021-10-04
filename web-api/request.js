const request=require("request");
request("http://www.google.co.in", function(response,body,error){
    if(!error && response.statusCode==200){
        console.log(body);
    }
    else if(error){
        console.log("some error has occured");
    }
})
