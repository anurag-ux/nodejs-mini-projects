const yargs=require("yargs");
const chalk=require("chalk");
const { string } = require("yargs");

yargs.version('15.4.1');

//add command
yargs.command({
    command:'add',
    describe:"add new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type:'string',
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string',
        }
    },
    handler:function(argv){
        console.log("Title: "+argv.title+"\nBody: "+argv.body);
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:"remove a note",
    handler:function(){
        console.log("Removing the note!")
    }
})

//list command
yargs.command({
    command:'list',
    describe:"list notes",
    handler:function(){
        console.log("Listing out all the notes!")
    }
})

//read
yargs.command({
    command:'read',
    describe:"read a note",
    handler:function(){
        console.log("Reading the note!")
    }
})

yargs.parse();
//console.log(yargs.argv);