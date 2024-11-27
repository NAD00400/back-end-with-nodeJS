const connection = require("../config/database")

const getHomePage = (req,res )=>{
    return res.render("home.ejs")
}
const getABC =(req,res)=>{
    res.send("home a b c")
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

module.exports ={getHomePage,getnguyenAnhduy, getABC ,postCreateUser,getCreatePage};