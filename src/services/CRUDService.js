const connection = require("../config/database");

const getAllUsers = async ()=>{
    let [results,fields] = await connection.query(`select * from Users`);
    return results;
}
const getUserById = async (userId)=>{
    let [results,fields] = await connection.query(`select * from Users Where id = ?`,[userId]);
    let user = results && results.length>0 ? results[0]:{};
    return user;
}
const postUpdateUserById = async(name,email,city,userId)=>{
    let [results, fields] = await connection.query(
        `
        Update Users
        set email=? ,name =? ,city=? 
        where id=?
        `, [email, name, city, userId]
    );
}
const postCreateUserCRUD = async(name,email,city)=>{
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
    )
}
const postDeleteUserbyId = async(id)=>{
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id=?; `, [id]
    )
}
module.exports={getAllUsers,getUserById,postUpdateUserById,postCreateUserCRUD ,postDeleteUserbyId}