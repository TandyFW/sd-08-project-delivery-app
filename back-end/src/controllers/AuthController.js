
module.export = async (req, res) => {
  const token = req.headers.authorization;
  if (!token || token === '') {
    return res.status(403).json({ message: 'Token not found' });
  }
  try {
    const secret = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ where: { email: decoded.data.email } });
    if (!user) {
      return res.status(403).json({ message: 'Expired or invalid token' });
    }
    req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Expired or invalid token' });
  }
}