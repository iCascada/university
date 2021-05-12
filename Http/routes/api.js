const {Router} = require('express')
const AuthController = require('../Controllers/Auth/AuthController')

const router = new Router()

router.get('/auth', AuthController.authentication)

module.exports = router