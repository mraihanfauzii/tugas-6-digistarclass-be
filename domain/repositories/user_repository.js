const User = require('../models/user_model');

const findOneByUserId = async (userId) => {
  return await User.findOne({ user_id: userId });
};

const findOneByEmail = async (email) => {
  return await User.findOne({ email });
};

const findAll = async () => {
  return await User.find();
};

const create = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const updateOne = async (userId, updateData) => {
  return await User.findOneAndUpdate({ user_id: userId }, updateData, { new: true });
};

const deleteOne = async (userId) => {
  return await User.findOneAndDelete({ user_id: userId });
};

module.exports = { findOneByUserId, findOneByEmail, findAll, create, updateOne, deleteOne };
