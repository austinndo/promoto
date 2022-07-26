const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    songId: { type: Number, required: true },
    username: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('posts', Post)
