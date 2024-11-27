const express = require("express")
const {getHomePage ,getnguyenAnhduy,getUpadateUser,postCreateUser,getCreatePage} =require("../controllers/homeControllers")

// khai báo route
const route =express.Router();


route.get('/', getHomePage)
route.get('/updateUser', getUpadateUser)
route.get('/delele', getnguyenAnhduy)

route.get('/create',getCreatePage)
route.post('/create-user',postCreateUser)

module.exports = route;