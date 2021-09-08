const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/products.controller')
const router = Router()

router.post(
    '/marketer/',
    passport.authenticate('jwt', {session: false}),
    upload.single('image'), 
    ctr.create
)

router.get(
    '/marketer/',
    passport.authenticate('jwt', {session: false}),
    ctr.getAll
)

router.get(
    '/marketer/:id',
    passport.authenticate('jwt', {session: false}),
    ctr.getById
)

router.put(
    '/marketer/:id',
    passport.authenticate('jwt', {session: false}),
    ctr.update
)

router.delete(
    '/marketer/:id',
    passport.authenticate('jwt', {session: false}),
    ctr.remove
)

router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.put('/:id', ctr.addView)

module.exports = router
