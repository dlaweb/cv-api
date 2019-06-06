import db from  './db/db';
import bp from 'body-parser';
import express from 'express';
import Sequelize from 'sequelize';
import models from './models/index';

let app = express()

const sequelize = new Sequelize('mysql://david:root@localhost/apicv');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected')
    })
    .catch(err => {
        console.log('Cannot connect to database')
    });

const findResume = async () => {
    try {
        const theResume = await models.cv.findAll()
        console.log("Récupération du cv")
        console.log(theResume)
    } catch (error) {
        console.log(error)
    }
}

findResume();

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

// Delete langage
app.delete('/api/v1/:id/competences/langage', (req,res) => {

    db.map((item) => {

        const tableLanguages = item.competences.langages

        item.competences.langages.map((value, index) => {
    
            if(req.body.id && req.body.position){
    
                if (req.body.position == index){
                    
                    tableLanguages.slice(index,1)
    
                    return res.status(201).send({
                        state: 'success',
                        message: `Le langage ${value} a bien été supprimé `,
                        cv: db
                    })

                }
            }else{
                return res.status(404).send({
                    state: 'error',
                    message: 'Cannot delete element'
                })
            }
        })
    })
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});