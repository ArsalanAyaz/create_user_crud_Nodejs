const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/arsal")

const userSchems = mongoose.Schema({
    name : String,
    email: String,
    image: String,
})

module.exports = mongoose.model("users", userSchems)