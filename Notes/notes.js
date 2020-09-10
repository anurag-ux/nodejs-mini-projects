const fs=require("fs");
const chalk=require("chalk");
const { title } = require("process");

const addNote=(title,body) =>{
    const note=loadNotes();

    const isDuplicate=note.find((notes)=>{
        return notes.title===title;
    }) //check for existing titles

    if(!isDuplicate){
        note.push({
            title:title,
            body:body
        });
        saveNotes(note);
        console.log(chalk.green("note added!"));
    }else{
        console.log(chalk.red("already present"));
    }
    
}

const removeNote=(title)=>{
    const notes=loadNotes();
    const toKeep=notes.filter(function(note){
        return note.title!==title;
    })
    if(toKeep.length===notes.length){
        console.log(chalk.red("NO NOTE FOUND!"));
    }else{
        saveNotes(toKeep);
        console.log(chalk.green("NOTE REMOVED!"));
    }
}

const readNote=(title)=>{
    var notes=loadNotes();
    var flag=false;
    notes.forEach(note => {
        if(note.title===title){
            console.log(chalk.blue(note.body));
            flag=true;
        }
    });
    if(flag===false){
        console.log(chalk.red("No Note Found"));
    }
}

const readAll=() =>{
    var notes=loadNotes();
    var i=1;
    notes.forEach(note => {
        console.log(chalk.yellowBright("\n"+i+". "+note.title+"\n"+note.body));
        console.log("=================================");
        i++;
    });
}

const loadNotes=()=>{
    try {
        const currNotes=JSON.parse(fs.readFileSync("notes.json"));
        return currNotes;
    } catch (error) {
        return [];
    }
}

const saveNotes=(note)=>{
    try{
        const toWrite=JSON.stringify(note);
        fs.writeFileSync("notes.json",toWrite);
    }
    catch(error){
        return null;
    }
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote,
    readAll:readAll,
};
