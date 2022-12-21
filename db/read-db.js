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
    async readAll(){
        const notes = await this.read();
        return [...JSON.parse(notes)];
        
    }
    async addNew(input) {
        let newInput = {
            id: uuidv4(),
            title: input.title,
            text: input.text
        }
        const notes = await this.readAll();
        const notes_1 = [...notes, newInput];
        await this.write(notes_1);
        return await this.read();
    }
}
module.exports = new Writeto();
