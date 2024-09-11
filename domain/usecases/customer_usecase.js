const customerRepository = require('../repositories/customer_repository');
const { v4: uuidv4 } = require('uuid');

exports.create = async (customerData) => {
    try {
        customerData.customer_id = uuidv4();
        return await customerRepository.create(customerData);
    } catch (error) {
        throw new Error('Failed to create customer');
    }
};

exports.getList = async () => {
    try {
        return await customerRepository.getList();
    } catch (error) {
        throw new Error('Failed to get customer list');
    }
};

exports.getOneByCustomerId = async (customerId) => {
    try {
        return await customerRepository.getOneByCustomerId(customerId);
    } catch (error) {
        throw new Error('Failed to get customer by ID');
    }
};

exports.updateOne = async (customerId, updateData) => {
    try {
        return await customerRepository.updateOne(customerId, updateData);
    } catch (error) {
        throw new Error('Failed to update customer');
    }
};

exports.deleteOne = async (customerId) => {
    try {
        return await customerRepository.deleteOne(customerId);
    } catch (error) {
        throw new Error('Failed to delete customer');
    }
};
