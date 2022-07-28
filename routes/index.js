const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

////////-------- Create --------////////

router.post('/song', controllers.addSong)

router.post('/post', controllers.addPost)

router.post('/user', controllers.addUser)

////////-------- Read --------////////

router.get('/', (req, res) => res.send('Arrived at the Promoto root!'))

router.get('/songs', controllers.getSongs)

router.get('/song/:id', controllers.getSongById)

router.get('/posts', controllers.getPosts)

router.get('/post/:id', controllers.getPostById)

router.get('/posts/:songId', controllers.getPostsBySongId)

router.get('/users', controllers.getUsers)

router.get('/users/:id', controllers.getUserById)

////////-------- Update --------////////

router.patch('/song/edit/:id', controllers.updateSong)

router.patch('/song/edit-genres/:id', controllers.updateSongGenres)

router.patch('/post/edit/:id', controllers.updatePost)

router.patch('/post/edit-genres/:id', controllers.updatePostGenres)

router.patch('/user/edit/:id', controllers.updateUser)

////////-------- Delete --------////////

router.delete('/song/:id', controllers.deleteSong)

router.delete('/post/:id', controllers.deletePost)

router.delete('/user/:id', controllers.deleteUser)

module.exports = router
