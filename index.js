const express = require("express");
var app = express()

app.get('/', (req,res) => {
    res.setHeader('Content-type', 'text/html')
    res.send("Initialisation de l'application")

});

app.listen(5000)
console.log("Running server")