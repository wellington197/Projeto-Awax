// Load modules 
const path = require("path")

//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/src/home.html")
})

//Public
app.use(express.static(path.join(__dirname, "assets")))

//Launch listening server on port 8888
const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log('App listening!')
})
