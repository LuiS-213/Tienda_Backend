const carritosController = require('../controllers/controller_carrito');
const auth = require('../middlewares/auth');

module.exports = (app) => {

    // 🔐 TODOS deben estar logueados
    app.get('/api/carritos', auth, carritosController.list);
    app.get('/api/carrito/:id', auth, carritosController.find);
    app.post('/api/carritos', auth, carritosController.create);
    app.put('/api/carrito/:id', auth, carritosController.update);
    app.delete('/api/carrito/:id', auth, carritosController.delete);
};