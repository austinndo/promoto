const mongoose = require('mongoose')
const Schema = mongoose.Schema

//reference user from user data

const Post = new Schema(
  {
    user: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('posts', Post)
