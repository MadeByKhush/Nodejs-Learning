//this program made for dynamic routing jisme jo route me user ka naam de raha hu woh route se hoke request ke through parameter --'params' me jaa rha h and waha se call ho rha h.
const express = require('express')
const app = express()

app.get('/profile/:username', function (req, res) {
    res.send(`Hello ${req.params.username} !`)
})

app.listen(3000)