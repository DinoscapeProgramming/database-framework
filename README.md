# Database Template
A database template programmed with fs

## Get started
First copy the file __database-template.js__ to your program. Then create a JSON file with the following content:
```sh
[]
```
After that you must requiring the database framework. Add this to your main file:
```
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

### Has database an element
```js
database.has('./database.json', 'i am fine') // replies with true or false
```

### Get a whole database
```js
database.getDatabase('./database.json', i am fine') // replies with an array
```
