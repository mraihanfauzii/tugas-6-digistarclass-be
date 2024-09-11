const itemRepository = require('../repositories/item_repository');
const { v4: uuidv4 } = require('uuid');

exports.create = async (itemData) => {
    try {
        itemData.item_id = uuidv4();
        return await itemRepository.create(itemData);
    } catch (error) {
        throw new Error('Failed to create item');
    }
};

exports.getList = async () => {
    try {
        return await itemRepository.getList();
    } catch (error) {
        throw new Error('Failed to get item list');
    }
};

exports.getOneByItemId = async (itemId) => {
    try {
        return await itemRepository.getOneByItemId(itemId);
    } catch (error) {
        throw new Error('Failed to get item by ID');
    }
};

exports.updateOne = async (itemId, updateData) => {
    try {
        return await itemRepository.updateOne(itemId, updateData);
    } catch (error) {
        throw new Error('Failed to update item');
    }
};

exports.deleteOne = async (itemId) => {
    try {
        return await itemRepository.deleteOne(itemId);
    } catch (error) {
        throw new Error('Failed to delete item');
    }
};
