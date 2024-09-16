const orderUsecase = require('../domain/usecases/order_usecase');
const Order = require('../domain/models/order_model');

const create = async (req, res) => {
    try {
        const order = await orderUsecase.create(req.body, req.user.userId);
        res.status(201).json({ statusCode: res.statusCode, message: 'Order created successfully', order });
    } catch (error) {
        res.status(error.statusCode || 500).json({ statusCode: res.statusCode, message: error.message });
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
        const order = await orderUsecase.getOneByOrderId(req.params.id, { status: req.body.status });
        res.status(200).json({ statusCode: res.statusCode, message: 'Order retrieved successfully', order });
    } catch (err) {
        res.status(404).json({ statusCode: res.statusCode, message: 'Order not found', error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        // Mengambil hanya status dari request body
        const statusUpdate = { status: req.body.status };

        // Melakukan update hanya pada field status
        const updatedOrder = await Order.findOneAndUpdate({ order_id: req.params.id }, statusUpdate, { new: true });

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
