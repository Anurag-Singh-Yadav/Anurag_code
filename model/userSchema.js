const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userprofile = new Schema({
    email:{
        type: String,
        required: true,
    },
    profile:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    bio:{
        type: String,
        default:null,
    },
    friends:{
        type: Array,
        default:[],
    },
    name:{
        type: String,
        default:null,
    },
})

module.exports = mongoose.model('User' , Userprofile);