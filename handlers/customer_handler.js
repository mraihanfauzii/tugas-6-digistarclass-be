const customerUsecase = require('../domain/usecases/customer_usecase');

const create = async (req, res) => {
    try {
        const newCustomer = await customerUsecase.create(req.body);
        res.status(201).json({ statusCode: res.statusCode, message: 'Customer created successfully', newCustomer });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to create customer', error: err.message });
    }
};

const getList = async (req, res) => {
    try {
        const customers = await customerUsecase.getList();
        res.status(200).json({ statusCode: res.statusCode, message: 'Customers retrieved successfully', customers });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to get customers', error: err.message });
    }
};

const getOneByCustomerId = async (req, res) => {
    try {
        const customer = await customerUsecase.getOneByCustomerId(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Customer retrieved successfully', customer });
    } catch (err) {
        res.status(404).json({ statusCode: res.statusCode, message: 'Customer not found', error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedCustomer = await customerUsecase.updateOne(req.params.id, req.body);
        res.status(200).json({ statusCode: res.statusCode, message: 'Customer updated successfully', updatedCustomer });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to update customer', error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await customerUsecase.deleteOne(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Customer deleted successfully' });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to delete customer', error: err.message });
    }
};

module.exports = { create, getList, getOneByCustomerId, updateOne, deleteOne };