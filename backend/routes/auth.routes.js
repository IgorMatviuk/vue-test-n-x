const {Router} = require('express')
const passport = require('passport')
const {login, createUser, loginAdmin, createAdmin} = require('../controllers/auth.controller')
const router = Router()

router.post('/admin/login', loginAdmin)

router.post('/admin/create', 
passport.authenticate('jwt', {session: false}), 
  createAdmin
)

router.post('/user/log', login)

router.post('/user/create', createUser)

module.exports = router