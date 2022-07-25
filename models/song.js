const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    artist: { type: String, required: true },
    genre: [{ type: String, required: true }],
    cover: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('songs', Song)
