const orderUsecase = require('../domain/usecases/order_usecase');

const create = async (req, res) => {
    try {
        const order = await orderUsecase.create({
            ...req.body,
            created_by: req.user.userId, // Assuming req.user contains authenticated user info
        });
        res.status(201).json({ statusCode: res.statusCode, message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to create order', error: error.message });
    }
};

const getList = async (req, res) => {
    try {
        const orders = await orderUsecase.getList();
        res.status(200).json({ statusCode: res.statusCode, message: 'Orders retrieved successfully', orders });
    } catch (error) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to get orders', error: error.message });
    }
};

const getOneByOrderId = async (req, res) => {
    try {
        const order = await orderUsecase.getOneByOrderId(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Order retrieved successfully', order });
    } catch (err) {
        res.status(404).json({ statusCode: res.statusCode, message: 'Order not found', error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedOrder = await orderUsecase.updateOne(req.params.id, req.body);
        res.status(200).json({ statusCode: res.statusCode, message: 'Order updated successfully', updatedOrder });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to update order', error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await orderUsecase.deleteOne(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to delete order', error: err.message });
    }
};

module.exports = { create, getList, getOneByOrderId, updateOne, deleteOne };
