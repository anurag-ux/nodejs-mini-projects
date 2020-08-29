console.log("      ===================");
console.log("      WELCOME TO MY SHOP!")
console.log("      ===================");

var faker=require("faker");
for(var i=0;i<10;i++){
    var name=faker.commerce.productName();
    var email=faker.commerce.price();
    console.log(name+" - $"+email);
}