import db from  './db/db';
import bp from 'body-parser';
import express from 'express';
import Sequelize from 'sequelize';
import models from './models/index';

const experience = models.cvExperience;

let app = express()
const routePrefix = "/api/v1/"
const sequelize = new Sequelize('mysql://david:root@localhost/apicv');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected')
    })
    .catch(err => {
        console.log(err)
    });

app.use(bp.urlencoded({extended:true}))

/** ROUTES */

// Retrieve the resume
app.get(routePrefix + "cv", (req, res) => {
    models.cv.findAll().then( (result) => res.json(result) )
});

// Retrieve experiences
app.get(routePrefix + "cv/:id/experiences", (req,res) => {
    const id = +req.params.id
    const experiences = experience.findAll({where: { cvId: id}}).then( (result) => res.json(result) )
});

// Add education
app.post(routePrefix + "cv/formation", (req,res) => {
    models.cvFormation.create({
        date: req.body.date,
        school: req.body.school,
        cvId: req.body.cvId
    })
    .then((result) => res.json(result))
});

// See the skills
app.get(routePrefix + ":id/competences", (req, res) => {

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
app.post(routePrefix + ":id/competences/langage", (req, res) => {

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
app.delete(routePrefix + ":id/competences/langage", (req,res) => {

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