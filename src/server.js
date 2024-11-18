const express = require('express')
const app = express()
const path = require('path'); 

require('dotenv').config();// dotenv
const port = process.env.PORT || 8888;
const hostname =process.env.HOST_NAME||"localhost"
// config template engine
app.set('views', path.join(__dirname,'views' ))//   

app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('check abc')
})

app.get('/nguyenanhduy', (req, res) => {
  res.render('example.ejs')
})


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})