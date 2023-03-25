const {Schema,model} = require('mongoose');

const User = new Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        default:""
    },
    password:{
        type:String,
        required:true
    },
    picturePath:{
        type:String,
        default:""
    }
});

module.exports = model('User',User);