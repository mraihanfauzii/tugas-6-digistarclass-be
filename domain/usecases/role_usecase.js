const roleRepository = require('../repositories/role_repository');
const { v4: uuidv4 } = require('uuid');

const create = async (roleData) => {
    const roleId = uuidv4();
    const role = {
        role_id: roleId,
        ...roleData,
    };
    return await roleRepository.create(role);
};

const getList = async () => {
    return await roleRepository.findAll();
};

const getOneByRoleId = async (roleId) => {
    try {
        return await roleRepository.getOneByRoleId(roleId);
    } catch (error) {
        throw new Error('Failed to get role by ID');
    }
};

const updateOne = async (roleId, updateData) => {
    try {
        return await roleRepository.updateOne(roleId, updateData);
    } catch (error) {
        throw new Error('Failed to update role');
    }
};

const deleteOne = async (roleId) => {
    try {
        return await roleRepository.deleteOne(roleId);
    } catch (error) {
        throw new Error('Failed to delete role');
    }
};

module.exports = { create, getList, getOneByRoleId, updateOne, deleteOne };
