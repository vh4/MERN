import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) =>{

    try {
        const dataUser = await User.findAll({
            attributes: ['uuid', 'name', 'email', 'role']
        });
        res.status(200).json(dataUser);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: error.message});
    }

}

export const getUsersById = async (req, res) =>{
    try {
        const dataUser = await User.findOne({
           attributes: ['uuid', 'name', 'email', 'role'],
           where:{
                uuid:req.params.id
           }
        });
        res.status(200).json(dataUser);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: error.message});
    }
}

export const createUsers = async (req, res) =>{

    const {name, email, password, confirmpassword, role} = req.body;
    
    if(password !== confirmpassword){
        return res.status(400).json({msg: "Password does not match"});
    }

    const hasPassword = await argon2.hash(password);
    try {
        await User.create({
            name,
            email,
            password: hasPassword,
            role
        });
        res.status(201).json({msg: "User created successfully"});
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: error.message});
    }

    
}


export const updateUsers = async (req, res) =>{
    const userFind = await User.findOne({
        where:{
            uuid:req.params.id
        }
    });
    
    if(!userFind){
        return res.status(404).json({msg: "User not found"});
    }

    const {name, email, password, confirmpassword, role} = req.body;
    let hasPassword;
    if(password === "" || password === null){
        hasPassword = userFind.password;
    }else{
        hasPassword = await argon2.hash(password);
    }

    if(password !== confirmpassword){
        return res.status(400).json({msg: "Password does not match"});
    }

    try {
        await User.update({
            name,
            email,
            password: hasPassword,
            role
        }, {
            where:{
                id:userFind.id
            }
        });
        res.status(201).json({msg: "User updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: error.message});
    }


}

export const deleteUsers = async (req, res) =>{
    const userFind = await User.findOne({
        where:{
            uuid:req.params.id
        }
    });
    
    if(!userFind){
        return res.status(404).json({msg: "User not found"});
    }

    try {
        await User.destroy({
            where:{
                id:userFind.id
            }
        });
        return res.status(200).json({msg:"User deleted"});
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: error.message});
    }

}