const orderUsecase = require('../domain/usecases/order_usecase');

const create = async (req, res) => {
    try {
        const order = await orderUsecase.create({
            ...req.body,
            created_by: req.user.userId, // Assuming req.user contains authenticated user info
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order', message: error.message });
    }
};

const getList = async (req, res) => {
    try {
        const orders = await orderUsecase.getList();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get orders', message: error.message });
    }
};

const getOneByOrderId = async (req, res) => {
    try {
        const order = await orderUsecase.getOneByOrderId(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedOrder = await orderUsecase.updateOne(req.params.id, req.body);
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await orderUsecase.deleteOne(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { create, getList, getOneByOrderId, updateOne, deleteOne };
