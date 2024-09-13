const roleUsecase = require('../domain/usecases/role_usecase');

const create = async (req, res) => {
    try {
        const role = await roleUsecase.create(req.body);
        res.status(201).json({ statusCode: res.statusCode, message: 'Role created successfully', role });
    } catch (error) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to create role', error: error.message });
    }
};

const getList = async (req, res) => {
    try {
        const roles = await roleUsecase.getList();
        res.status(200).json({ statusCode: res.statusCode, message: 'Roles retrieved successfully', roles });
    } catch (error) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to get roles', error: error.message });
    }
};

const getOneByRoleId = async (req, res) => {
    try {
        const role = await roleUsecase.getOneByRoleId(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Role retrieved successfully', role });
    } catch (err) {
        res.status(404).json({ statusCode: res.statusCode, message: 'Role not found', error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedRole = await roleUsecase.updateOne(req.params.id, req.body);
        res.status(200).json({ statusCode: res.statusCode, message: 'Role updated successfully', updatedRole });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to update role', error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await roleUsecase.deleteOne(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Role deleted successfully' });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to delete role', error: err.message });
    }
};

module.exports = { create, getList, getOneByRoleId, updateOne, deleteOne };
