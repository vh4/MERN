import User from "../models/UserModel.js";

export const verify = async (req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "User not logged in"});
    }
    const userFind = await User.findOne({
        where:{
            uuid:req.session.userId
        }
    });

    if(!userFind){
        return res.status(404).json({msg: "User not found"});
    }

    req.userId = userFind.id;
    req.role = userFind.role;

    next();
}

export const adminOnly = async (req, res, next) => {
    const userFind = await User.findOne({
        where:{
            uuid:req.session.userId
        }
    });

    if(!userFind){
        return res.status(404).json({msg: "User not found"});
    }

    if(userFind.role !== "admin"){
        return res.status(403).json({msg: "Forbidden"});
    }
    next();
}