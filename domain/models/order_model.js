const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
});

const orderSchema = new mongoose.Schema({
    order_id: { type: String, required: true, unique: true },
    item_id: { type: String, required: true },
    product_name: { type: String, required: true },
    price: { type: Number, required: true },
    total_price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    payment_method: { type: String, enum: ['gopay', 'ovo', 'va_bca', 'va_mandiri', 'va_bri'], required: true },
    address: { type: addressSchema, required: true },
    delivery_method: { type: String, enum: ['jne', 'gojek', 'grab'], required: true },
    status: { type: String, enum: ['Menunggu Konfirmasi', 'Menunggu Pembayaran', 'Menunggu Pengiriman', 'Pengiriman', 'Sampai di Tujuan', 'Selesai'], default: 'Menunggu Konfirmasi' },
    created_by: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
