const {Schema,model} = require('mongoose');

const Commnet = new Schema({
    user:{
        type:String,
        require:true
    },
    idUser:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:Number,
        default: 0
    }
})

module.exports = model('Commnet',Commnet)