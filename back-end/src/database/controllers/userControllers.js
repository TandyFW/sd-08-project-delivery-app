const router = require('express').Router();
const { createUser, getUsers } = require('../services/userServices');
const { CREATED, BAD_REQUEST } = require('../services/statusCode')

router.post('/', async (req, res) => {
  const newUser = await createUser(req.body);
  if (newUser.error) return res.status(BAD_REQUEST).json({ message: newUser.error.message });
  return res.status(CREATED).json({ user: newUser, response: true });
});

router.get('/', async (_req, res) => {
  const users = await getUsers();
  res.status(CREATED).json(users);
});

module.exports = router;
