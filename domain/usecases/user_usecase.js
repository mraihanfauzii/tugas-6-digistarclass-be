const repository = require('../repositories/user_repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const register = async (user) => {
  user.user_id = uuidv4();
  user.password = await bcrypt.hash(user.password, 10);
  return await repository.create(user);
};

const login = async (email, password) => {
  const user = await repository.findOneByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '30m' });
  return token;
};

module.exports = { register, login };
