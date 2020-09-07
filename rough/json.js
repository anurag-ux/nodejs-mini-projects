const fs=require("fs");
const chall=JSON.parse(fs.readFileSync("play.json"));

chall["name"]="anurag";
chall["age"]="20";

const writeData=JSON.stringify(chall);
console.log(writeData);
fs.writeFileSync("play.json",writeData);