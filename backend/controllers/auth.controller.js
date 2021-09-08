const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')
const User = require('../models/user.model')
const Admin = require('../models/admin.model')
const Marketer = require('../models/marketer.model')

module.exports.loginAdmin = async (req, res) => {
  const candidate = await Admin.findOne({login: req.body.login})

  if (candidate) {
    const isPassportCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    if (isPassportCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        adminId: candidate._id
      }, keys.JWT,  {expiresIn: 60 * 60})
      res.json({token})
    } else {
      res.status(401).json({message: 'Пароль не верный'})
    }
  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }
}

module.exports.createAdmin = async (req, res) => {
  const candidate = await Admin.findOne({login: req.body.login})

  if (candidate) {
    res.status(409).json({message: 'такой login уже занят'})
  } else {

    const salt = bcrypt.genSaltSync(10)
    const admin = new Admin({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })

    await admin.save()
    res.status(201).json(admin)
  }

}

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({login: req.body.login})

  if (candidate) {
    const isPassportCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    if (isPassportCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.JWT,  {expiresIn: 60 * 60})
      res.json({token})
    } else {
      res.status(401).json({message: 'Пароль не верный'})
    }
  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }
}

module.exports.createUser = async (req, res) => {
  const candidate = await User.findOne({login: req.body.login})

  if (candidate) {
    res.status(409).json({message: 'такой login уже занят'})
  } else {

    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })

    await user.save()
    res.status(201).json(user)
  }

}

/* */

module.exports.loginMarketer = async (req, res) => {
  const candidate = await Marketer.findOne({login: req.body.login})

  if (candidate) {
    const isPassportCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    if (isPassportCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        marketerId: candidate._id
      }, keys.JWT,  {expiresIn: 60 * 60})
      res.json({token})
    } else {
      res.status(401).json({message: 'Пароль не верный'})
    }
  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }
}

module.exports.createMarketer = async (req, res) => {
  const candidate = await Marketer.findOne({login: req.body.login})

  if (candidate) {
    res.status(409).json({message: 'такой login уже занят'})
  } else {

    const salt = bcrypt.genSaltSync(10)
    const marketer = new Marketer({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })

    await marketer.save()
    res.status(201).json(marketer)
  }

}