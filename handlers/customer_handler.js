const customerUsecase = require('../domain/usecases/customer_usecase');

const create = async (req, res) => {
    try {
        const newCustomer = await customerUsecase.create(req.body);
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getList = async (req, res) => {
    try {
        const customers = await customerUsecase.getList();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getOneByCustomerId = async (req, res) => {
    try {
        const customer = await customerUsecase.getOneByCustomerId(req.params.id);
        res.status(200).json(customer);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedCustomer = await customerUsecase.updateOne(req.params.id, req.body);
        res.status(200).json(updatedCustomer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await customerUsecase.deleteOne(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { create, getList, getOneByCustomerId, updateOne, deleteOne };