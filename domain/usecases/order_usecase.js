const axios = require('axios');
const orderRepository = require('../repositories/order_repository');
const { v4: uuidv4 } = require('uuid');
const itemUsecase = require('./item_usecase');
const Order = require('../models/order_model');
const User = require('../models/user_model');

const create = async (orderData, userId) => {
    try {
        const user = await User.findOne({ user_id: userId });
        if (!user) {
            throw new Error('User not found');
        }

        let itemToOrder;
        
        // Check if item_id looks like a UUID
        if (/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/.test(orderData.item_id)) {
            itemToOrder = await itemUsecase.getOneByItemId(orderData.item_id);
        } else {
            // Assume item_id is from FakeStore API and fetch directly
            const response = await axios.get(`https://fakestoreapi.com/products/${orderData.item_id}`);
            itemToOrder = response.data ? { ...response.data, item_id: response.data.id.toString() } : null;
        }

        if (!itemToOrder) {
            throw new Error('Item not found');
        }

        const orderId = uuidv4();
        const order = new Order({
            order_id: orderId,
            item_id: orderData.item_id,
            product_name: itemToOrder.name || itemToOrder.title,
            price: itemToOrder.price,
            quantity: orderData.quantity,
            payment_method: orderData.payment_method,
            delivery_method: orderData.delivery_method,
            total_price: itemToOrder.price * orderData.quantity,
            status: orderData.status || 'Menunggu Konfirmasi',
            created_by: userId, // ID pengguna dari token
            address: {
                street: user.address.street,
                city: user.address.city,
                state: user.address.state,
                zip: user.address.zip
            }
        });

        return await orderRepository.create(order);
    } catch (error) {
        throw new Error(error.message || 'Failed to create order');
    }
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

const updateOne = async (req, res) => {
    try {
        const orderId = req.params.id;  // ID dari order yang ingin diupdate
        const statusUpdate = { status: req.body.status };  // Hanya memperbarui status
        const updatedOrder = await Order.findOneAndUpdate({ order_id: orderId }, statusUpdate, { new: true });
        res.status(200).json({ statusCode: res.statusCode, message: 'Order updated successfully', updatedOrder });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to update order', error: err.message });
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
