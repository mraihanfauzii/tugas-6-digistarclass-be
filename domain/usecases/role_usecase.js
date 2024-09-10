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

module.exports = { create, getList };
