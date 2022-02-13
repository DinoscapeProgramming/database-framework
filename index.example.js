const database = require('./database-template');
const settings = {
  file: './database.json.example'
}

database.add(settings.file, "Hello")
// adds a element called "Hello"

database.remove(settings.file, "World")
// removes a element called "World"

console.log(database.get(settings.file, 0))
// gets the first element

console.log(database.getDatabase(settings.file))
// gets the whole database
