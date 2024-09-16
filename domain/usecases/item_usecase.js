const itemRepository = require('../repositories/item_repository');
const { v4: uuidv4 } = require('uuid');
const Item = require('../models/item_model');
const axios = require('axios');

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
        const localItem = await Item.findOne({ item_id: itemId });
        if (localItem) {
            return localItem;
        } else {
            // Assume the item_id is an integer for the FakeStoreAPI
            const response = await axios.get(`https://fakestoreapi.com/products/${itemId}`);
            const apiItem = response.data;
            if (apiItem) {
                return {...apiItem, item_id: apiItem.id.toString()};  // Convert API item format to your expected format
            }
            return null;
        }
    } catch (error) {
        throw new Error('Failed to find item: ' + error.message);
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
