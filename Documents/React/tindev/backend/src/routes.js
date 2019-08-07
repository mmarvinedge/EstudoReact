const express = require('express');
const DevController = require('./controllers/DevController');
const LikesController = require('./controllers/LikeController');

const routes = express.Router();

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikesController.store);

module.exports = routes;