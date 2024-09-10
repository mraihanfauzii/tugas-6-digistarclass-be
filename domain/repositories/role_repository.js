const Role = require('../models/role_model');

const create = async (role) => {
  const newRole = new Role(role);
  return await newRole.save();
};

const findAll = async () => {
  return await Role.find();
};

const getOneByRoleId = async (roleId) => {
  return await Role.findOne({ role_id: roleId });
};

const updateOne = async (roleId, updateData) => {
  return await Role.findOneAndUpdate({ role_id: roleId }, updateData, { new: true });
};

const deleteOne = async (roleId) => {
  return await Role.findOneAndDelete({ role_id: roleId });
};

module.exports = { create, findAll, getOneByRoleId, updateOne, deleteOne };
