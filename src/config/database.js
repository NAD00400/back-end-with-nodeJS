const mongoose = require('mongoose');
require('dotenv').config();// dotenv
// const mysql = require('mysql2/promise');

//  const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections:true,
//     connectionLimit:10,
//     queueLimit:0
//   });
// 1

const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];
const  connection = async()=>{
  try {
    await mongoose.connect('mongodb://root:123456@127.0.0.1:27017');
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    console.log("Handle Error Conection DB:",error);
  }
  
}
  module.exports =connection;