const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes =  express.Router();

//Rota para login
routes.post('/session', SessionController.create);

//Rotas para Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rotas para casos
routes.get('/incidents',  IncidentController.index);
routes.post('/incidents',  IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Rota para caso especifico de uma ong
routes.get('/profile', ProfileController.index);
module.exports = routes;