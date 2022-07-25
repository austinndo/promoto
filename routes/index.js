const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('Arrived at the Promoto root!'))

module.exports = router
