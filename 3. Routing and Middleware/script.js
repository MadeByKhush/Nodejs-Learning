const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log("Ye hai middleware");
    next();
})



app.get('/', function(req, res){
    res.send("Hello from Home Page");
})

app.get('/profile', (req, res) => {
    res.send("Hello Khush This is your profile")
})

app.listen(3000)