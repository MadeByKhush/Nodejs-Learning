const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.01:27017/firstDB")
const userdata = mongoose.Schema({
  username : String,
  password : Number,
  Mobile : Number,
  age : Number
})
module.exports = mongoose.Model("user", userdata);