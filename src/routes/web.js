const express = require("express")
const {getHomePage ,getnguyenAnhduy,getABC,postCreateUser,getCreatePage} =require("../controllers/homeControllers")

// khai báo route
const route =express.Router();


route.get('/', getHomePage)
route.get('/abc', getABC)
route.get('/nguyenanhduy', getnguyenAnhduy)

route.get('/create',getCreatePage)
route.post('/create-user',postCreateUser)

module.exports = route;