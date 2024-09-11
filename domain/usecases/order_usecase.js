const orderRepository = require('../repositories/order_repository');
const { v4: uuidv4 } = require('uuid');

const create = async (orderData) => {
    const orderId = uuidv4();
    const order = {
        order_id: orderId,
        ...orderData,
    };
    return await orderRepository.create(order);
};

const getList = async () => {
    return await orderRepository.findAll();
};

const getOneByOrderId = async (orderId) => {
    try {
        return await orderRepository.getOneByOrderId(orderId);
    } catch (error) {
        throw new Error('Failed to get order by ID');
    }
};

const updateOne = async (orderId, updateData) => {
    try {
        return await orderRepository.updateOne(orderId, updateData);
    } catch (error) {
        throw new Error('Failed to update order');
    }
};

const deleteOne = async (orderId) => {
    try {
        return await orderRepository.deleteOne(orderId);
    } catch (error) {
        throw new Error('Failed to delete order');
    }
};

module.exports = { create, getList, getOneByOrderId, updateOne, deleteOne };
