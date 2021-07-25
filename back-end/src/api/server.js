const port = process.env.PORT || 3001;
const app = require('./app');
const userController = require('../database/controllers/userControllers');

app.use('/register', userController);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
