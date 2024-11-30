const express = require('express')
const app = express()
const path = require('path'); 
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")
const connection =require('./config/database');
const { postCreateUser } = require('./controllers/homeControllers');
const { log } = require('console');

require('dotenv').config();// dotenv
const port = process.env.PORT || 8888;
const hostname =process.env.HOST_NAME||"localhost"

//config req.body
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

//config template engine
configViewEngine(app);

//khai bao route
app.use('/',webRoutes)

// test connection 
connection()
// connection.query(
//   'SELECT * FROM Users u',
//   function (err, results, fields) {
//   // console.log(">>> check results",results ); // results contains rows returned by server
//   }
// );


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})