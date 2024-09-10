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

module.exports = { create, getList };
