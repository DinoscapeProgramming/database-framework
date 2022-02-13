const fs = require('fs');

function newElement(name) {
  let data = fs.readFileSync('./database.json', 'utf8');
  data = eval(data)
  data.push(name)
  fs.writeFileSync('./database.json', JSON.stringify(data), 'utf8')
}

function removeElement(id) {
  let data = fs.readFileSync('./database.json', 'utf8');
  data = eval(data)
  data = data.filter(item => item != id)
  fs.writeFileSync('./database.json', JSON.stringify(data), 'utf8')
}

function getElement(id) {
  return eval(fs.readFileSync('./database.json', 'utf8'))[id]
}

function getArray() {
  return eval(fs.readFileSync('./database.json', 'utf8'))
}