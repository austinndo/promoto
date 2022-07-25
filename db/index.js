const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/promotoSongsDatabase'

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to Promoto MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db