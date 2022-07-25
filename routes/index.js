const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

////////-------- Create --------////////

router.post('/new-song', controllers.createSong)

////////-------- Read --------////////

router.get('/', (req, res) => res.send('Arrived at the Promoto root!'))

router.get('/songs', controllers.getSongs)

router.get('/song/id/:id', controllers.getSongById)

router.get('/posts', controllers.getPosts)

router.get('/post/:id', controllers.getPostById)

////////-------- Update --------////////
//put vs patch ??

router.put('/post/edit/:id', controllers.updatePost)

router.put('/song/edit/:id', controllers.updateSong)

router.put('/song/genres/:id', controllers.updateGenres)

////////-------- Delete --------////////

router.delete('/post/:id', controllers.deletePost)

module.exports = router
