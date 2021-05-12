const {Router} = require('express')
const ApiRoutes = require('./api')

const router = Router()

router.use('/api', ApiRoutes)

module.exports = router