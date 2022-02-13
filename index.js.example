const database = require('./database-template');
const settings = {
  file: './database.json.example'
}

database.addElement(settings.file, "Hello")
// adds a element called "Hello"

database.removeElement(settings.file, "World")
// removes a element called "World"

console.log(database.getElement(settings.file, 0))
// gets the first element

console.log(database.getDatabase(settings.file))
// gets the whole database
