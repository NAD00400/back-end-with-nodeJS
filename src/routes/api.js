const express = require("express")
const { getUserAPi ,postCreateUserAPI, putUpdateUserById,deleteUpdateUserById,postUploadSingleFile} = require("../controllers/apiControllers");

// khai báo route
const routerAPI =express.Router();

routerAPI.get('/users', getUserAPi)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users',  putUpdateUserById)
routerAPI.delete('/users',  deleteUpdateUserById)
routerAPI.post('/file', postUploadSingleFile)
module.exports = routerAPI;