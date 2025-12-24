const { error } = require('console');
const express = require('express')
const app = express()

//setting up middleware's
app.use(function(req, res, next){
    console.log("Middleware !");
    next();
})

//configure static files paths for 
app.use(express.static('./public'))

//Configure express for ejs
app.set('view engine', 'ejs')


app.get('/', function(req, res){
    res.render("index" , {Coffee: "Chai"})
})

app.get('/about', function(req, res){
    res.render("about", {Team: "Squad"})
})

app.get('/error', (req, res) => {
    throw Error("Something went Wrong");
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000);