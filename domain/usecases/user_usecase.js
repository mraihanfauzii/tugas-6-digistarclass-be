const userRepository = require('../repositories/user_repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const register = async (user) => {
  user.user_id = uuidv4();
  user.password = await bcrypt.hash(user.password, 10);
  return await userRepository.create(user);
};

const login = async (email, password) => {
  const user = await userRepository.findOneByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '30m' });
  return token;
};

const getList = async () => {
  try {
      return await userRepository.findAll();
  } catch (error) {
      throw new Error('Failed to get users');
  }
};

const getOneByUserId = async (userId) => {
  try {
      return await userRepository.findOneByUserId(userId);
  } catch (error) {
      throw new Error('Failed to get user by ID');
  }
};

const updateOne = async (userId, updateData) => {
  try {
      return await userRepository.updateOne(userId, updateData);
  } catch (error) {
      throw new Error('Failed to update user');
  }
};

const deleteOne = async (userId) => {
  try {
      return await userRepository.deleteOne(userId);
  } catch (error) {
      throw new Error('Failed to delete user');
  }
};

module.exports = { register, login, getList, getOneByUserId, updateOne, deleteOne };
