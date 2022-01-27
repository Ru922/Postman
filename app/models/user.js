const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        name: {
        type: String
        },
        avatar:{
            type: String,
            default:'https://image.com'
        },
        email:{
            type: String,
            unique: true,
            required:true
        }
    
    }
)

module.exports = mongoose.model('user', UserScheme)