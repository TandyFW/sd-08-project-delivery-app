require('dotenv').config();

const port = process.env.PORT || 3001;
const port2 = process.env.PORT2 || 3002;
const { errors } = require('celebrate');
const { app, io } = require('./app');

app.use(errors());

app.use((err, _req, res, _next) => {
  console.error(err.message);
  return res.status(500).json({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Internal server error',
  });
});

app.listen(port);
console.log(`Api rodando na porta ${port}`);
io.listen(port2);
console.log(`Socket rodando na porta ${port2}`);
