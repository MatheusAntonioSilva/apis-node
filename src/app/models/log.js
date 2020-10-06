const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({
  message: String
})

module.exports = mongoose.model('Log', logSchema)
