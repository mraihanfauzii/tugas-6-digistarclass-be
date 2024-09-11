const Customer = require('../models/customer_model');

exports.create = async (customerData) => {
    try {
        const newCustomer = new Customer(customerData);
        return await newCustomer.save();
    } catch (error) {
        throw new Error('Error creating customer');
    }
};

exports.getList = async () => {
    try {
        return await Customer.find();
    } catch (error) {
        throw new Error('Error retrieving customers');
    }
};

exports.getOneByCustomerId = async (customerId) => {
    try {
        return await Customer.findOne({ customer_id: customerId });
    } catch (error) {
        throw new Error('Error retrieving customer');
    }
};

exports.updateOne = async (customerId, updateData) => {
    try {
        return await Customer.findOneAndUpdate({ customer_id: customerId }, updateData, { new: true });
    } catch (error) {
        throw new Error('Error updating customer');
    }
};

exports.deleteOne = async (customerId) => {
    try {
        return await Customer.findOneAndDelete({ customer_id: customerId });
    } catch (error) {
        throw new Error('Error deleting customer');
    }
};
