import passport from 'passport'

const express = require('express')
const mongoose = require('mongoose')
const passportStrategy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const app = express() 

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB'))
  .catch(error => console.log(error))
  
app.use(passport.initialize())
passport.use(passportStrategy)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', authRoutes)

app.get('/test', function (req, res) {
  res.send('Test successful')
})

export default {
  path: '/backend',
  handler: app
}