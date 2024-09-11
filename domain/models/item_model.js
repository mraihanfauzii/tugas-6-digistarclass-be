const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
