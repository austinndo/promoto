const mongoose = require('mongoose')
require('dotenv').config()

// previous
// let MONGODB_URI = 'mongodb://127.0.0.1:27017/promotoDatabase'

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/promotoDatabase'

mongoose
  //previous .connect(MONGODB_URI, { ... })
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to Promoto MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
