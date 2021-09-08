const {Router} = require('express')
const passport = require('passport')
const {login, createUser, loginAdmin, createAdmin, createMarketer, loginMarketer} = require('../controllers/auth.controller')
const router = Router()

router.post('/admin/login', loginAdmin)

router.post('/admin/create', 
passport.authenticate('jwt', {session: false}), 
  createAdmin
)

router.post('/marketer/login', loginMarketer)

router.post('/marketer/create', 
  createMarketer
)

router.post('/user/log', login)

router.post('/user/create', createUser)

module.exports = router