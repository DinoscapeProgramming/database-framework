const fs = require('fs');

function setup(name) {
  if (!fs.existsSync(name)) {
    if (!name.endsWith(".json")) throw new Error("FILE MUST HAVE JSON AS FORMAT");
    fs.appendFileSync(name, JSON.stringify([]), function (err) {
    throw err;
    })
  }
}

function has(file, name) {
  return eval(fs.readFileSync(file, 'utf8')).includes(name)
}

function add(file, name) {
  if (!name) throw new Error("NO ELEMENT GIVEN");
  if (hasElement(file, name)) throw new Error("ELEMENT ALREADY EXISTS");
  let data = fs.readFileSync(file, 'utf8');
  data = eval(data)
  data.push(name)
  fs.writeFileSync(file, JSON.stringify(data), 'utf8')
}

function remove(file, name) {
  if (!name) throw new Error("NO ELEMENT GIVEN");
  let data = fs.readFileSync(file, 'utf8');
  data = eval(data)
  data = data.filter(item => item != name)
  fs.writeFileSync(file, JSON.stringify(data), 'utf8')
}

function get(file, id) {
  return eval(fs.readFileSync(file, 'utf8'))[id]
}

function set(file, oldName, newName) {
  let data = fs.readFileSync(file, 'utf8');
  data = eval(data)
  data[data.indexOf(oldName)] = newName
  fs.writeFileSync(file, JSON.stringify(data), 'utf8')
}

function all(file) {
  return eval(fs.readFileSync(file, 'utf8'))
}

function clear(file) {
  fs.writeFileSync(file, JSON.stringify([]), 'utf8')
}

module.exports = { setup, add, remove, get, set, has, all, clear }
