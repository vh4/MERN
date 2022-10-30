import User from '../models/UserModel.js';
import argon2 from 'argon2';

export const Login = async (req, res) =>{
    const userFind = await User.findOne({
        where:{
            email:req.body.email
        }
    });
    
    if(!userFind){
        return res.status(404).json({msg: "User not found"});
    }

    const match = await argon2.verify(userFind.password, req.body.password)
    if(!match){
        return res.status(401).json({msg: "Incorrect password"});
    }

    req.session.userId = userFind.uuid;
    const uuid = userFind.uuid;
    const name = userFind.name;
    const email = userFind.email
    const role = userFind.role;

    res.status(200).json({
        uuid: uuid,
        name: name,
        email: email,
        role: role
    })

}

export const getUserLogin = async (req, res) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "User not logged in"});
    }
    const userFind = await User.findOne({
        attributes: ['uuid', 'name', 'email', 'role'],
        where:{
            uuid:req.session.userId
        }
    });

    if(!userFind){
        return res.status(404).json({msg: "User not found"});
    }

    res.status(200).json(userFind);

}


export const Logout = async (req, res) =>{
    req.session.destroy((err) =>{{
        if(err){
            return res.status(500).json({msg: err});
        }
    }});
    return res.status(200).json({msg: "User logged out"});
}