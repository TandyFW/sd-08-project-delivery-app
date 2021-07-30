const routes = require('express').Router();
const LoginRoutes = require('./login');
const UserRoutes = require('./user');
const ProductRoutes = require('./product');
<<<<<<< HEAD
=======

>>>>>>> b7dbe24141533c89d6f807a2725c923c91b24bbe
const SaleRoutes = require('./sale');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);
routes.use('/product', ProductRoutes);
routes.use('/sale', SaleRoutes);
<<<<<<< HEAD
=======
routes.use('/product', ProductRoutes);
>>>>>>> b7dbe24141533c89d6f807a2725c923c91b24bbe

module.exports = routes;
