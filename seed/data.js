const db = require('../db')
const { Song, Post, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  //Add the songs
  const songs = [
    {
      name: '',
      artist: '',
      genre: ''
    },
    {
      name: '',
      artist: '',
      genre: ''
    },
    {
      name: '',
      artist: '',
      genre: ''
    },
    {
      name: '',
      artist: '',
      genre: ''
    },
    {
      name: '',
      artist: '',
      genre: ''
    }
  ]

  await Song.insertMany(songs)
  console.log("Here's the setlist!")

  //Add the posts
  const posts = [
    {
      user: '',
      title: '',
      image: '',
      likes: 0
    },
    {
      user: '',
      title: '',
      image: '',
      likes: 0
    },
    {
      user: '',
      title: '',
      image: '',
      likes: 0
    },
    {
      user: '',
      title: '',
      image: '',
      likes: 0
    }
  ]

  await Post.insertMany(posts)
  console.log('Uploaded some posts')

  //Add the users
  const users = [
    {
      name: '',
      username: ''
    },
    {
      name: '',
      username: ''
    },
    {
      name: '',
      username: ''
    },
    {
      name: '',
      username: ''
    },
    {
      name: '',
      username: ''
    }
  ]

  await User.insertMany(users)
  console.log('Added some users')
}
const run = async () => {
  await main()
  db.close()
}

run()
