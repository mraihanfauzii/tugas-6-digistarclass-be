const axios = require('axios');
const Item = require('../models/item_model');

exports.create = async (itemData) => {
    const newItem = new Item(itemData);
    return await newItem.save();
};

exports.getList = async () => {
    try {
        // Ambil item dari MongoDB
        const dbItems = await Item.find();

        // Ambil item dari FakeStoreAPI
        const apiResponse = await axios.get('https://fakestoreapi.com/products');
        const apiItems = apiResponse.data;

        // Gabungkan item dari MongoDB dan FakeStoreAPI
        return [...dbItems, ...apiItems];
    } catch (error) {
        throw new Error('Error retrieving items');
    }
};

exports.getOneByItemId = async (itemId) => {
    return await Item.findOne({ item_id: itemId });
};

exports.updateOne = async (itemId, updateData) => {
    return await Item.findOneAndUpdate({ item_id: itemId }, updateData, { new: true });
};

exports.deleteOne = async (itemId) => {
    return await Item.findOneAndDelete({ item_id: itemId });
};
