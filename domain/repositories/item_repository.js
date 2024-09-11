const Item = require('../models/item_model');

exports.create = async (itemData) => {
    try {
        const newItem = new Item(itemData);
        return await newItem.save();
    } catch (error) {
        throw new Error('Error creating item');
    }
};

exports.getList = async () => {
    try {
        return await Item.find();
    } catch (error) {
        throw new Error('Error retrieving items');
    }
};

exports.getOneByItemId = async (itemId) => {
    try {
        return await Item.findOne({ item_id: itemId });
    } catch (error) {
        throw new Error('Error retrieving item');
    }
};

exports.updateOne = async (itemId, updateData) => {
    try {
        return await Item.findOneAndUpdate({ item_id: itemId }, updateData, { new: true });
    } catch (error) {
        throw new Error('Error updating item');
    }
};

exports.deleteOne = async (itemId) => {
    try {
        return await Item.findOneAndDelete({ item_id: itemId });
    } catch (error) {
        throw new Error('Error deleting item');
    }
};
