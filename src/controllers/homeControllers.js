const connection = require("../config/database");
const {getAllUsers,getUserById, postUpdateUserById,postCreateUserCRUD,postDeleteUserbyId} = require("../services/CRUDService");

const getHomePage = async(req,res )=>{
    let results = await getAllUsers();
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
    await postCreateUserCRUD(name,email,city);
    res.redirect('/')
}



const getUpdateUser =async(req,res)=>{
    let userId =req.params.id;
    const user = await getUserById(userId);
    res.render("update.ejs",{userEdit:user})// x <- y
}
const postHandleUpdateUser = async (req,res) => {
    let {name,email,city,userId}=req.body; //<=> let email= req.body.email; let name = req.body.name; let city =req.body.city;
    await postUpdateUserById(name,email,city,userId);
    res.redirect('/')
}

const getDeleteUser=async(req,res)=>{
    let userId =req.params.id;
    const user =await getUserById(userId);
    res.render('delete.ejs',{userEdit:user})
}
const postSubmitDeleteUser =async(req,res)=>{
    let {userId}=req.body;
    await postDeleteUserbyId(userId);
    res.redirect('/')
}
module.exports ={getHomePage ,getnguyenAnhduy, getUpdateUser ,postHandleCreateUser ,getCreatePage,postHandleUpdateUser,postSubmitDeleteUser ,getDeleteUser};