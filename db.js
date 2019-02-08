const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const crypto = require('crypto')

const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const adapter = new FileSync('./database.json')
const db = low(adapter, {
  serialize: (data) => encrypt(JSON.stringify(data)),
  deserialize: (data) => JSON.parse(decrypt(data))
})

const encrypt = (text) => {
  console.log('encrypt')
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

const decrypt = (text) => {
  console.log('decrypt')
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

const init = () => {
  // db.defaults({ transactions: [] }).write()
}

module.exports = {
  init,
  db
}
