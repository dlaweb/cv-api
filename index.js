import db from  './db/db';

const bp = require('body-parser');
const express = require("express");
var app = express()


app.use(bp.urlencoded({extended:true}))

app.get('/api/v1/cv', (req,res) => {
    res.status(200).send({
        success: 'true',
        message: 'Cv retrieved successfully',
        cv: db
    })
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});