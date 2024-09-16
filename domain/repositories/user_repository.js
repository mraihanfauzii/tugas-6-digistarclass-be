const User = require('../models/user_model');

exports.findOneByUserId = async (userId) => {
  return await User.findOne({ user_id: userId });
};

exports.findOneByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.findAll = async () => {
  return await User.find();
};

exports.create = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

exports.updateOne = async (userId, updateData) => {
  return await User.findOneAndUpdate({ user_id: userId }, updateData, { new: true });
};

exports.deleteOne = async (userId) => {
  return await User.findOneAndDelete({ user_id: userId });
};
