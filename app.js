const express = require('express')
const app = express()
const cors = require('cors')

const servicesController = require('./controllers/servicesController')


// Middleware
app.use(express.json())
app.use(cors())
app.use('/services', servicesController);

// localhost:3001/
app.get('/',(req,res) => {
    res.send("Welcome to MANI-FESTATIONS")
})

//404
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});




module.exports = app