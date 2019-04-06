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

// See the skills
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

// Add a language to skills
app.post('/api/v1/:id/competences/langage', (req, res) => {


    db.map((item) => {
        const tableLanguages = item.competences.langages

        if (req.body.langages && req.body.id){

            const langage = req.body.langages

            tableLanguages.push(langage)

            return res.status(201).send({
                success: 'true',
                message: 'Le langage a bien été ajouté',
                cv: db
            })
        }else{
            return res.status(404).send({
                success: 'false',
                message: 'Cannot push datas'
            })
        }
    })
    
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});