const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    name : {
        type : String,
    },
    value : {
        type : String,
    }
})

module.exports = mongoose.model("City" , citySchema);