let _ = require('../util/util')

const bodyParser = require('body-parser'),
    jwt = require('express-jwt'),
    cors = require('cors'),
    http = require('http');

const routesMiddleware = {};

/**
 * Configura a aplicação para as rotas de requisições
 *
 * @param {Object} app - Objeto que encapsula a aplicação Express
 */
routesMiddleware.set = app => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //app.use('/api/reservas', app.authMiddleware, reservasRouter);
};

module.exports = routesMiddleware;