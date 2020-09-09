const yargs=require("yargs");
const chalk=require("chalk");
const notes=require("/home/anurag/Desktop/nodejs-mini-projects/Notes/notes.js");

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
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body);
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:"remove a note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string",
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title);
    }
})

//list command
yargs.command({
    command:'list',
    describe:"list notes",
    handler:()=>{
        console.log("Reading Notes...");
        notes.readAll();
    }
})

//read
yargs.command({
    command:'read',
    describe:"read a note",
    builder:{
        title:{
            describe:"title of note",
            demandOption:true,
            type:"string"
        }
    },
    handler:(argv)=>{
        notes.readNote(argv.title);
    }
})

yargs.parse();