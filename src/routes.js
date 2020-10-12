const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Lista Produtos
routes.get('/products', ProductController.index);
//Detalhe Produto
routes.get('/products/:id', ProductController.show);
//Cria Produto
routes.post('/products', ProductController.store);
// Update Produto
routes.put('/products/:id', ProductController.update);
// Delete Produto
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;
