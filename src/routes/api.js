const express = require("express")
const { getUserAPi ,postCreateUserAPI} = require("../controllers/apiControllers");

// khai báo route
const routerAPI =express.Router();

routerAPI.get('/users', getUserAPi)
routerAPI.post('/users', postCreateUserAPI)
module.exports = routerAPI;