const categoriaController = require('../controllers/controller_categorias');

module.export = (app) => {
    
    app.get('/api/categorias', categoriaController.list);
    app.get('/api/categoria/:nombre', categoriaController.find);
    app.post('/api/categoria/', categoriaController.create);
    app.put('/api/categoria/:id', categoriaController.update);
    app.delete('/appi/categoria/:id', categoriaController.delete);
}