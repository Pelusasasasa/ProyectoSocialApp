const {Schema,model} = require('mongoose');

const Post = new Schema({

    img:{
        type:[],
        default:[]
    },
    user:{
        type:String,
        require:true
    },
    idUser:{
        type:String,
        require:true
    },
    description:{
        type:String,
        default:""
    },
    date:{
        type:Date,
        default:Date.now
    },
    comentaries:{
        type:Array,
        default:[]
    },
    Likes:{
        type:Number,
        default:0
    },
    Shares:{
        type:Number,
        default:0
    }

});

module.exports = model('Post',Post);