const sessionsUseCase = require('../services/sessionsUseCase');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const access = await sessionsUseCase.auth({ email, password });
      res.status(200).json(access);
    } catch (error) {
      return res.status(401).json(error.responseError());
    }
};
