const connection = require("../config/database");
const {getAllUsers} = require("../services/CRUDService");

const getHomePage = async(req,res )=>{
    
    let results = await getAllUsers();
   
    return res.render("home.ejs",{listUsers:results});
}
const getUpadateUser =(req,res)=>{
    res.render("updateUser.ejs")
}

const getnguyenAnhduy =(req,res)=>{
    res.send("home nguyen anh duy")
}

const postCreateUser = async (req,res) => {
    let {name,email,city}=req.body; //<=> let email= req.body.email; let name = req.body.name; let city =req.body.city;
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
    )
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports ={getHomePage,getnguyenAnhduy, getUpadateUser,postCreateUser,getCreatePage};