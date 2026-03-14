const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({

    bookName:{
        type:String
    },
    bookAuthor:{
        type:String
    },
    bookPrice:{
        type:Number
    }
})

module.exports = mongoose.model("books",bookSchema)