const Song = require('../models/song')
const Post = require('../models/post')

////---------------------------- Songs ----------------------------////

//------------ Create ------------//

//How it was done in the review
// const createSongg = async (req, res) => {
//   try {
//     const newSong = await Song.create(req.body)
//     await newSong.save()
//     return res.status(201).json({ newSong })
//      ||
//     res.send(newSong)
//   } catch (error) {
//     throw error
//   }
// }

const createSong = async (req, res) => {
  try {
    const newSong = await new Song(req.body)
    await newSong.save()
    return res.status(201).json({ newSong })
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

//------------ Update ------------//

//------------ Delete ------------//

////---------------------------- Posts ----------------------------////

//---------------- Create ----------------//

//---------------- Read ----------------//

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

//---------------- Update ----------------//

//consider using the ids saved in the database we created manually
const updateSong = async (req, res) => {
  try {
    const songId = req.params.objectId
    const updatedSong = await Song.updateOne(req.body, {
      where: { _id: songId },
      returning: true
    })
    res.send(updatedSong)
  } catch (error) {
    throw error
  }
}

// const updateGenres = async (req, res) => {
//   try {
//     const newGenre = req.body.genre
//     const songId = req.params.objectId
//     const updatedGenres = await Song.update(
//       { _id: songId },
//       { $push: { genre: { newGenre } } }
//     )
//     res.send(updatedGenres)
//   } catch (error) {
//     throw error
//   }
// }

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
    const postId = req.params.objectId
    const updatedPost = await Post.updateOne(req.body, {
      where: { _id: postId },
      returning: true
    })
    res.send(updatedPost)
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

//---------------- Delete ----------------//

// const deletePost = async (req, res) => {
//   try {
//     const postId = req.params.objectId
//     await Post.findByIdAndDelete({ where: { _id: postId } })
//     res.send({ msg: `Post of id: ${postId} deleted` })
//   } catch (error) {
//     throw error
//   }
// }

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    throw error
  }
}

////////-------- Module Exports --------////////

module.exports = {
  createSong,
  getSongs,
  getSongById,
  getPosts,
  getPostById,
  updatePost,
  updateSong,
  updateSongGenres,
  updatePostGenres,
  deletePost
}

//////----------Notes from Router and Controller Review------------////////////

//create Index / List route
//getObjects

//create Details / Show route
//getObjectById
// const getObjectById = async (req, res) => {
//   try {
//     const object = await Object.findById(req.params.id)
// return res.status(200).json({object}) || res.send(object)
//   } catch (error) {
//     throw error
//   }
// }
