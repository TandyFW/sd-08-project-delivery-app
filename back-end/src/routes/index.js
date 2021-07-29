const routes = require('express').Router();
const LoginRoutes = require('./login');
const UserRoutes = require('./user');
<<<<<<< HEAD
const ProductRoutes = require('./product');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);
routes.use('/product', ProductRoutes);
=======
const SaleRoutes = require('./sale');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);
routes.use('/sale', SaleRoutes);
>>>>>>> 3f80eb4ee336896f4f93b866074c5a216703e579

module.exports = routes;
