const router = require('express').Router();
const { createUser } = require('../services/userServices');
const { CREATED, BAD_REQUEST } = require('../services/statusCode')

router.post('/register', async (req, res) => {
  const newUser = await createUser(req.body);
  if (newUser.error) return res.status(BAD_REQUEST).json({ message: newUser.error.message });
  res.status(CREATED).json({ user: newUser, response: true });
});

module.exports = router;
