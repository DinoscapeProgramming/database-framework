# Database Template
A database template programmed with fs

## Get started
First copy the file __database-template.js__ to your program. Then create a JSON file with the following content:
```
[]
```
or add this to your code
```js
database.setup(database.json)
```
After that you must requiring the database framework. Add this to your main file:
```js
const database = require('./database-template')
```
Now you're ready to use this database framwork!

## Introduction
### Require the framework
```js
const database = require('./database-template.json')
```

### Add an element to a database
```js
database.add('./database.json', 'hello')
```

### Remove an element from a database
```js
database.remove('./database.json', 'world')
```

### Get an element from a database
```js
database.get('./database.json', 'how are you')
```

### Change an element from a database
```js
database.set('./database.json', 'world', 'guys')
```

### Change an element from a database by id
```js
database.set('./database.json', database.get('./database.json', 2), 'github')
```

### Has database an element
```js
database.has('./database.json', 'i am fine') // replies with true or false
```

### Clear a database
```js
database.clear('./database.json')
```

### Get a whole database
```js
database.all('./database.json', i am fine') // replies with an array
```

## Example
```js
const database = require('./database-template.js');
const settings = {
  file: './database.json'
}

database.setup(settings.file.substring(1, settings.file.length))

database.clear(settings.file)

database.add(settings.file, "Hello")

database.add(settings.file, "World")

database.add(settings.file, "!")

database.remove(settings.file, "World")

if (database.has(settings.file, "World") {
  console.log("How are you?")
} else {
  console.log("How are you all on the world?")
}

database.set(settings.file, "World", "You there")

console.log(database.all(settings.file))
