const Song = require('../models/song')
const Post = require('../models/post')
const User = require('../models/user')

//------------ Create ------------//

const addSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(201).json({ song })
  } catch (error) {
    throw error
  }
}

const addPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({ post })
  } catch (error) {
    throw error
  }
}

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    throw error
  }
}

//------------ Read ------------//

const getSongs = async (req, res) => {
  try {
    const songs = await Song.find()
    return res.status(200).json({ songs })
  } catch (error) {
    throw error
  }
}

const getSongById = async (req, res) => {
  try {
    const song = await Song.find({ id: req.params.id })
    return res.status(200).json({ song })
  } catch (error) {
    throw error
  }
}

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    throw error
  }
}

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    return res.status(200).json({ post })
  } catch (error) {
    throw error
  }
}

const getPostsBySongId = async (req, res) => {
  try {
    const posts = await Post.find({ songId: req.params.songId })
    return res.status(200).json({ posts })
  } catch (error) {
    throw error
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    return res.status(200).json({ user })
  } catch (error) {
    throw error
  }
}

//------------ Update ------------//

const updateSong = async (req, res) => {
  try {
    const songId = req.params.id
    const updatedSong = await Song.findOneAndUpdate({ id: songId }, req.body)
    res.send(updatedSong)
  } catch (error) {
    throw error
  }
}

const updateSongGenres = async (req, res) => {
  try {
    const newGenres = await Song.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { genre: { $each: req.body.genre } } }
    )
    res.json({ newGenres })
  } catch (error) {
    throw error
  }
}

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id
    const updatedPost = await Post.findByIdAndUpdate({ _id: postId }, req.body)
    //const updatedPost = await Post.findByIdAndUpdate({ _id: postId}, req.body, { new: true })
    //from Aug 1 review: { new: true } will display the updated post after calling the function!
    res.json(updatedPost)
  } catch (error) {
    throw error
  }
}

const updatePostGenres = async (req, res) => {
  try {
    const newGenres = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { genre: { $each: req.body.genre } } }
    )
    res.json({ newGenres })
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findByIdAndUpdate({ _id: userId }, req.body)
    res.json(user)
  } catch (error) {
    throw error
  }
}

//------------ Delete ------------//

const deleteSong = async (req, res) => {
  try {
    const songId = req.params.id
    await Song.findOneAndDelete({ id: songId })
    res.send({ msg: `Song of id: ${songId} deleted` })
  } catch (error) {
    throw error
  }
}

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id
    await Post.findByIdAndDelete({ _id: postId })
    res.send({ msg: `Post of id: ${postId} deleted` })
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id
    await User.findByIdAndDelete({ _id: userId })
    res.send({ msg: `User of id: ${userId} deleted` })
  } catch (error) {
    throw error
  }
}

////////-------- Module Exports --------////////

module.exports = {
  //Create
  addSong,
  addPost,
  addUser,
  //Read
  getSongs,
  getSongById,
  getPosts,
  getPostById,
  getPostsBySongId,
  getUsers,
  getUserById,
  //Update
  updateSong,
  updateSongGenres,
  updatePost,
  updatePostGenres,
  updateUser,
  //Delete
  deleteSong,
  deletePost,
  deleteUser
}
