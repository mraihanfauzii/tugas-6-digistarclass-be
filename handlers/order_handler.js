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

module.exports = { create, getList };
