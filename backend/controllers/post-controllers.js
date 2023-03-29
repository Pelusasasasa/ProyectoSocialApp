const postCTRL = {};

const Post = require('../models/Post');

postCTRL.post = async(req,res)=>{
    const post = new Post(req.body);
    await post.save();
    console.log(`Post del usuario ${req.body.user} cargado`);
    res.end();
}

postCTRL.getForId = async(req,res)=>{
    const {id} = req.params;
    const post = await Post.find({_id:id});
    res.send(post)
};

postCTRL.putForId = async(req,res)=>{
    const {id} = req.params;
    await Post.findOneAndUpdate({_id:id},req.params);
    console.log(`Post de ${req.body.user} Modificado `);
    res.end();
}

postCTRL.deleteForId = async(req,res)=>{
    const {id} = req.params;
    await Post.findOneAndDelete({_id:id});
    console.log(`Post con id ${id} Eliminado`)
    res.end();
}

postCTRL.getForUserId = async(req,res)=>{
    const {userId} = req.params;
    const posts = await Post.find({userId:userId});
    res.send(posts);
}


module.exports = postCTRL