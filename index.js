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

// Voir les compétences
app.get('/api/v1/:id/competences', (req, res) => {

    const id = +req.params.id

    db.map((cv) => {
        if (cv.id === id ){
            return res.status(200).send({
                success: 'true',
                message: 'Competences retrieved',
                competences: cv.competences
            })
        }else{
            return res.status(404).send({
                success: 'false',
                message: 'Cannot retrieved datas'
            })
        }
    })

});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});