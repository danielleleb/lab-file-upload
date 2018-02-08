const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Picture = require('../models/picture').Picture

const UserSchema = Schema({
  username: String,
  email: String,
  password: String
  // picture: new Picture()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
