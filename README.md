# Contexte
Créer une API REST pour distribuer mon CV.

## Routes

### Authentification
Certaines routes d'API doivent être authentifiées (modification, ajout, suppression).

### Compétences
Pouvoir lister/voir/ajouter/supprimer/modifier une compétence, avec un niveau d'expertise de 1 à 5.

### Experiences
Pouvoir lister/voir/ajouter/supprimer/modifier une experience
Lier les compétences aux expériences, ex: Node.JS.

### Hobbies
Pouvoir lister/voir/ajouter/supprimer/modifier un hobby

 ### Langues
 Pouvoir lister/voir/ajouter/supprimer/modifier une langue avec un niveau

 ### Formations
 Pouvoir lister/voir/ajouter/supprimer/modifier une formation

 ### Librairies

- Express
- jsonwebtoken
- sequelize
- joi

### Autres

- Intégrer eslint
- Intégrer Babel pour les import/export, ou regarder le package "esm" (pas testé encore de mon coté)
-Règles de base airbnb : eslint-config-airbnb-base

### Utilisation

npx babel-node index.js

#### Request

GET http://localhost:5000/api/v1/cv
GET http://localhost:5000/api/v1/1/competences

POST http://localhost:5000/api/v1/1/competences
