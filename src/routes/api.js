const express = require("express")
const { getUserAPi ,postCreateUserAPI, putUpdateUserById,deleteUpdateUserById,postUploadSingleFile,postUploadMultipleFile} = require("../controllers/apiControllers");
const {postCreateCustomer,postCreateArrayCustomers}= require ("../controllers/customerApi")
// khai báo route
const routerAPI =express.Router();

routerAPI.get('/users', getUserAPi)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users',  putUpdateUserById)
routerAPI.delete('/users',  deleteUpdateUserById)
routerAPI.post('/file', postUploadSingleFile)
routerAPI.post('/files', postUploadMultipleFile)
routerAPI.post('/customer', postCreateCustomer)
routerAPI.post('/customer-many', postCreateArrayCustomers)
module.exports = routerAPI;