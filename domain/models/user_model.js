const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'customer'], required: true },
  address: { type: addressSchema, required: true }, // Memastikan alamat disertakan dan wajib
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
