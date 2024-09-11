const itemUsecase = require('../domain/usecases/item_usecase');

const create = async (req, res) => {
    try {
        const newItem = await itemUsecase.create(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getList = async (req, res) => {
    try {
        const items = await itemUsecase.getList();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getOneByItemId = async (req, res) => {
    try {
        const item = await itemUsecase.getOneByItemId(req.params.id);
        res.status(200).json(item);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const updateOne = async (req, res) => {
    try {
        const updatedItem = await itemUsecase.updateOne(req.params.id, req.body);
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        await itemUsecase.deleteOne(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { create, getList, getOneByItemId, updateOne, deleteOne };