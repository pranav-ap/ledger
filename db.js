const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./database.json')
const db = low(adapter)

const init = () => {
  // db.defaults({ transactions: [] }).write()
}

module.exports = {
  init,
  db
}
