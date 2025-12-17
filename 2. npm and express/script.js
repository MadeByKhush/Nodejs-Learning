//isme express install and use kiya and haa routing ke concept padhe
const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send('Hello');
})

app.get("/Home", (req, res) => {
    res.send("Hello On Home Page")
})

app.listen(3000);