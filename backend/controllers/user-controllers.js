const userCTRL = {};

const User = require('../models/User');

userCTRL.post = async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    console.log(`Usuario ${req.body.name} Creado con exito`);
    res.end();
};

userCTRL.getForId = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findOne({_id:id});
    res.send(user);
};

userCTRL.getForName = async(req,res)=>{
    const {name} = req.params;
    const user = await User.findOne({name:name});
    res.send(user);
}

userCTRL.putForId = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findOneAndUpdate({_id:id},req.body);
    console.log(`Usuario ${req.body.name} Modificado`);
    res.end();
}

userCTRL.deleteForId = async(req,res)=>{
    const {id} = req.params;
    const user = await User.findOneAndDelete({_id:id});
    console.log(`Usuario con _id ${id} eliminado`);
    res.end();
};

module.exports = userCTRL