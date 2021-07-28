import jwt from 'jsonwebtoken';

export default (token) => {
  const decoded = jwt.decode(token);
  const { name, email, role } = decoded.data;
  return { name, email, role, token };
};
