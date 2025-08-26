//Archive of configuration
import express from 'express'; // Importa a bibilioteca express
import routes from './routes.js'; // Importa as rotas do outro arquivo

class Index {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json()); // Needs data on JSON format {example:"ExamplE"}
    }
    routes(){
        this.app.use(routes);
    }
}

export default new Index().app;