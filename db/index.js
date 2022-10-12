const mongoose = require('mongoose')
require('dotenv').config()

// previous
// let MONGODB_URI = 'mongodb://127.0.0.1:27017/promotoDatabase'

let MONGODB_URI =
  'mongodb+srv://promoter:promoted@promoto-db.eqtbjys.mongodb.net/?retryWrites=true&w=majority'

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? MONGODB_URI
    : 'mongodb://127.0.0.1:27017/promotoDatabase'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to Promoto MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
