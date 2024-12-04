const connection = require("../config/database");
const {getAllUsers,getUserById, postUpdateUserById,postCreateUserCRUD,postDeleteUserbyId} = require("../services/CRUDService");

const User = require("../models/user")

const getHomePage = async(req,res )=>{
    let results =await User.find({});
    res.render("home.ejs",{listUsers:results});
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getnguyenAnhduy =(req,res)=>{
    res.send("home nguyen anh duy")
}

const postHandleCreateUser= async (req,res) => {
    let {name,email,city}=req.body; //<=> let email= req.body.email; let name = req.body.name; let city =req.body.city;
    // await postCreateUserCRUD(name,email,city);
    await User.create({
        email
        ,name
        ,city
    })
    res.send("tao user thanh cong")
    // res.redirect('/')
}

const getUpdateUser =async(req,res)=>{
    let userId =req.params.id;
    // const user = await getUserById(userId);
    const user = await User.findById(userId).exec()
    res.render("update.ejs",{userEdit:user})// x <- y
}
const postHandleUpdateUser = async (req,res) => {
    let {name,email,city,userId}=req.body; //<=> let email= req.body.email; let name = req.body.name; let city =req.body.city;
    // await postUpdateUserById(name,email,city,userId);
    await User.updateOne({_id:userId},{email:email, name:name ,city:city})
    res.redirect('/')
}

const getDeleteUser=async(req,res)=>{
    let userId =req.params.id;
    const user = await User.findById(userId).exec()
    res.render('delete.ejs',{userEdit:user})
}
const postSubmitDeleteUser =async(req,res)=>{
    let {userId}=req.body;
    await Character.deleteOne({_id:userId});
    res.redirect('/')
}
module.exports ={getHomePage ,getnguyenAnhduy, getUpdateUser ,postHandleCreateUser ,getCreatePage,postHandleUpdateUser,postSubmitDeleteUser ,getDeleteUser};