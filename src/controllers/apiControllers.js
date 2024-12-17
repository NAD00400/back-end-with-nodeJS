
const User = require("../models/user")
const {upLoadSingleFile}= require("../services/fileService")
const getUserAPi = async(req,res )=>{
    let results =await User.find({});
    return res.status(200).json(
        {
            errorCode:0,
            data:results,
        }
    )
}
const postCreateUserAPI= async (req,res) => {
    let {name,email,city}=req.body; 
    let user = await User.create({
        email
        ,name
        ,city
    })
    return res.status(200).json(
        {
            errorCode:0,
            data:user,
        }
    )
}

const putUpdateUserById = async (req,res) => {
    let {name,email,city,userId}=req.body; 

    let user =await User.updateOne({_id:userId},{email:email, name:name ,city:city})
    return res.status(200).json(
        {
            errorCode:0,
            data:user,
        }
    )
}
const deleteUpdateUserById =async(req,res)=>{
    let {userId}=req.body;
    let user =await User.deleteOne({_id:userId});
    return res.status(200).json(
        {
            errorCode:0,
            data:user,
        }
    )
}

const postUploadSingleFile =async(req,res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
       }   
    fileObject = req.files.image ;   
    let results = await upLoadSingleFile(req.files.image);
    return res.send("oke single ")
    
}
module.exports= {getUserAPi,postCreateUserAPI, putUpdateUserById,deleteUpdateUserById,postUploadSingleFile}