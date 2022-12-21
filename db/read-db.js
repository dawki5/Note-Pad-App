//Required file imports
const fs = require('fs');

//npm requried for unique id for notes
const util = require('util');

//npm used to print formatted strings or supplies functions helpful for debugging
const { v4: uuidv4 } = require('uuid');

//Used to convert the call back to a promise based method
const readfile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//Function to read, save and delete notes to db.json file
class Writeto {
    read(){
        return readfile("db/db.json", "UTF-8")

    }
    write(input){
        return writeFile("db/db.json", JSON.stringify(input))
    }
    readAll(){
        return this.read().then(notes => [...JSON.parse(notes)])
        
    }
    addNew(input) {
        let newInput = {
            id: uuidv4(),
            title: input.title,
            text: input.text
        }
        return this.readAll()
        .then(notes=> [...notes, newInput])
        .then(notes=> this.write(notes))
        .then(()=> this.read())
    }
    deleteNote(id) {
        return this.readAll()
        .then(notes => notes.filter(note=> note.id !== id))
        .then(notes => this.write(notes))
        .then(() => this.read())
    }
}

module.exports = new Writeto();
