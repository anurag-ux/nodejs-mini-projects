const fs=require("fs");
const chalk=require("chalk");

const getNotes=function(){
    return "Your notes...";
}

const addNote=function(title,body){
    const note=loadNotes();

    const isDuplicate=note.filter(function(notes){
        return notes.title===title;
    }) //check for existing titles

    if(isDuplicate.length===0){
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

const removeNote=function(title){
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

const loadNotes=function(){
    try {
        const currNotes=JSON.parse(fs.readFileSync("notes.json"));
        return currNotes;
    } catch (error) {
        return [];
    }
}

const saveNotes=function(note){
    try{
        const toWrite=JSON.stringify(note);
        fs.writeFileSync("notes.json",toWrite);
    }
    catch(error){
        return null;
    }
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
};
