
const User = require("../models/customer")
const {upLoadSingleFile, uploadMutipleFile}= require("../services/fileService")
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
        return res.status(400).json({
            EC: 1,
            message: 'No files were uploaded.',
        });
       }   
    const fileObject = req.files.image ;   
    let results = await upLoadSingleFile(fileObject);
}
const postUploadMultipleFile =async(req,res)=>{
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                EC: 1,
                message: 'No files were uploaded.',
            });
        }  
        const fileArr = req.files.image;
        if( Array.isArray(fileArr)){
            const results = await uploadMutipleFile(fileArr);
            return res.status(200).json({
                EC:0,
                message: 'Multiple files uploaded successfully.',
                data:results
            })  
        }
        else{
            const singleResult = await postUploadSingleFile(req,res)
            return res.status(200).json({
                EC: 0,
                message: 'Single file uploaded successfully.',
                data: singleResult,
            });
        }
    }

module.exports= {getUserAPi,postCreateUserAPI, putUpdateUserById,deleteUpdateUserById,postUploadSingleFile,postUploadMultipleFile }