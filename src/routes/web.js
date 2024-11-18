const express = require("express")
const {getHomePage ,getnguyenAnhduy,getABC} =require("../controllers/homeControllers")
 
// khai báo route
const route =express.Router();


route.get('/', getHomePage)
route.get('/abc', getABC)
route.get('/nguyenanhduy', getnguyenAnhduy)
module.exports = route;