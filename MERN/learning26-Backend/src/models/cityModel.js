const mongoose = require("mongoose")
const Schema = mongoose.Schema

const citySchema = new Schema({

    cityName:{
        type:String
    },
    population:{
        type:Number
    }
})

module.exports = mongoose.model("cities",citySchema)