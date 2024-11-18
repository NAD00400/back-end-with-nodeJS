const express = require('express')
const app = express()
const path = require('path'); 
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")


require('dotenv').config();// dotenv
const port = process.env.PORT || 8888;
const hostname =process.env.HOST_NAME||"localhost"

//config template engine
configViewEngine(app);

//khai bao route
app.use('/',webRoutes)


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})