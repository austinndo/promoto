const mongoose = require('mongoose')
require('dotenv').config()

// previous
// let MONGODB_URI = 'mongodb://127.0.0.1:27017/promotoDatabase'

let MONGODB_URI =
  'mongodb+srv://promoter:get_this_party_started@promoto-cluster.i57hr.mongodb.net/promotoDatabase?retryWrites=true&w=majority'

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? MONGODB_URI
    : 'mongodb://127.0.0.1:27017/promotoDatabase'

mongoose
  //previous .connect(MONGODB_URI, { ... })
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
