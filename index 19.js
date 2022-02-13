const fs = require('fs');

function addElement(file, name) {
  let data = fs.readFileSync(file, 'utf8');
  data = eval(data)
  data.push(name)
  fs.writeFileSync(file, JSON.stringify(data), 'utf8')
}

function removeElement(file, name) {
  let data = fs.readFileSync(file, 'utf8');
  data = eval(data)
  data = data.filter(item => item != name)
  fs.writeFileSync(file, JSON.stringify(data), 'utf8')
}

function getElement(file, id) {
  return eval(fs.readFileSync(file, 'utf8'))[id]
}

function getArray(file) {
  return eval(fs.readFileSync(file, 'utf8'))
}

module.exports = { addElement, removeElement, getElement, getArray }