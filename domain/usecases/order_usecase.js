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

module.exports = { create, getList };
