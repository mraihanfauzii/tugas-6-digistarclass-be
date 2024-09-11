const roleUsecase = require('../domain/usecases/role_usecase');

const create = async (req, res) => {
    try {
        const role = await roleUsecase.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create role', message: error.message });
    }
};

const getList = async (req, res) => {
    try {
        const roles = await roleUsecase.getList();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get roles', message: error.message });
    }
};

const getOneByRoleId = async (req, res) => {
    try {
        const role = await roleUsecase.getOneByRoleId(req.params.id);
        res.status(200).json(role);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedRole = await roleUsecase.updateOne(req.params.id, req.body);
        res.status(200).json(updatedRole);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await roleUsecase.deleteOne(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { create, getList, getOneByRoleId, updateOne, deleteOne };
