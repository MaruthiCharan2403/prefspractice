const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userschema = new Schema({
    title:{
        type:String
    },
    artist:{
        type:String
    },
    band:{
        type:String
    }
})

module.exports = mongoose.model('music',userschema);