const express = require("express")
const {getHomePage ,getnguyenAnhduy,getUpdateUser,postHandleCreateUser,getCreatePage ,postHandleUpdateUser,postSubmitDeleteUser,getDeleteUser} =require("../controllers/homeControllers");
const { postDeleteUserbyId } = require("../services/CRUDService");

// khai báo route
const route =express.Router();


route.get('/', getHomePage)

route.get('/delele', getnguyenAnhduy)

route.get('/create',getCreatePage)
route.post('/create-user',postHandleCreateUser)

route.get('/update/:id', getUpdateUser);
route.post('/update-user',postHandleUpdateUser)

route.get('/delete/:id',getDeleteUser)
route.post('/delete-user',postSubmitDeleteUser)


module.exports = route;