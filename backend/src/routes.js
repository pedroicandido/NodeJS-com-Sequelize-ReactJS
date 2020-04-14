const express = require('express');
const ItemController = require('./controllers/ItemController');
const UserController = require('./controllers/UserController');
const routes = express.Router();

routes.post('/register', UserController.store);
routes.post('/login', UserController.show);
routes.get('/user/:userId/itens', ItemController.index);
routes.get('/user/:userId/itens/:id', ItemController.show);
routes.post('/user/:userId/itens', ItemController.store);
routes.delete('/user/:userId/itens/:id', ItemController.destroy);
routes.put('/user/:userId/itens/:id', ItemController.update);
module.exports = routes;