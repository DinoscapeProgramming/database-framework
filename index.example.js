const database = require('./database-template');
const settings = {
  file: './database.json.example'
}

database.setup(settings.file.substring(1, settings.file.length))
// creates a new file called "database.json.example"

database.clear(settings.file)
// clears the database

database.add(settings.file, "Hello")
// adds an element called "Hello"

database.remove(settings.file, "World")
// removes an element called "World"

database.set(settings.file, "World", "you there")
// sets "World" to "you there"

console.log(database.has(settings.file, "Hello"))
// logs is database has "Hello"

console.log(database.get(settings.file, 0))
// gets the element with position 1

console.log(database.all(settings.file))
// gets the whole database
