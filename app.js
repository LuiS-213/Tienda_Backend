require('dotenv').config();
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');


const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta de prueba
app.get('/', (req, res) => res.status(200).send({
  message: 'Bienvenido a la API REST de compras.',
}));

// Rutas (⚠️ tienes una repetida)
require('./routes/route_categorias')(app);
require('./routes/route_usuarios')(app);
require('./routes/route_productos')(app);
require('./routes/route_carrito')(app);
require('./routes/route_carrito_detalle')(app);

// Puerto
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

// Servidor
const server = http.createServer(app);
server.listen(port);

module.exports = app;