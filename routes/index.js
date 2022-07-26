const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

////////-------- Create --------////////

router.post('/new-song', controllers.addSong)

router.post('/new-post', controllers.addPost)

router.post('/new-user', controllers.addUser)

////////-------- Read --------////////

router.get('/', (req, res) => res.send('Arrived at the Promoto root!'))

router.get('/songs', controllers.getSongs)

router.get('/song/id/:id', controllers.getSongById)

router.get('/posts', controllers.getPosts)

router.get('/post/:id', controllers.getPostById)

router.get('/users', controllers.getUsers)

router.get('/users/:id', controllers.getUserById)

////////-------- Update --------////////
//put vs patch ?? for genre update?

router.patch('/song/edit/:id', controllers.updateSong)

router.patch('/song/edit-genres/:id', controllers.updateSongGenres)

router.patch('/post/edit/:id', controllers.updatePost)

router.patch('/post/edit-genres/:id', controllers.updatePostGenres)

////////-------- Delete --------////////

router.delete('/song/:id', controllers.deleteSong)

router.delete('/post/:id', controllers.deletePost)

router.delete('/user/:id', controllers.deleteUser)

module.exports = router
