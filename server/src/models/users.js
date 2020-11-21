const mongoose = require('mongoose');
const {Schema} = mongoose;
require('dotenv').config()

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type: String,
        required: true
    },
    // token : String,
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
})

const modelUser = mongoose.model('Users', userSchema)

module.exports = modelUser;