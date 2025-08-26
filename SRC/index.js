//Archive of configuration
const express = require('express') // Importa a bibilioteca express
const routes = require('./routes') // Importa as rotas do outro arquivo

class Index {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
    }
    routes(){
        this.app.use(routes);
    }
}

module.exports = new Index().app;