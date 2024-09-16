const axios = require('axios');
const itemUsecase = require('../domain/usecases/item_usecase');

const create = async (req, res) => {
    try {
        const newItem = await itemUsecase.create(req.body);
        res.status(201).json({ statusCode: res.statusCode, message: 'Item created successfully', newItem });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to create item', error: err.message });
    }
};

const getList = async (req, res) => {
    try {
        // Hanya panggil getList dari itemUsecase
        const allItems = await itemUsecase.getList();
        res.status(200).json({ statusCode: res.statusCode, message: 'Items retrieved successfully', allItems });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to get items', error: err.message });
    }
};

const getOneByItemId = async (req, res) => {
    try {
        const item = await itemUsecase.getOneByItemId(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Item retrieved successfully', item });
    } catch (err) {
        res.status(404).json({ statusCode: res.statusCode, message: 'Item not found', error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedItem = await itemUsecase.updateOne(req.params.id, req.body);
        res.status(200).json({ statusCode: res.statusCode, message: 'Item updated successfully', updatedItem });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to update item', error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await itemUsecase.deleteOne(req.params.id);
        res.status(200).json({ statusCode: res.statusCode, message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ statusCode: res.statusCode, message: 'Failed to delete item', error: err.message });
    }
};

module.exports = { create, getList, getOneByItemId, updateOne, deleteOne };