const Order = require('../models/order_model');

exports.create = async (order) => {
  const newOrder = new Order(order);
  return await newOrder.save();
};

exports.findAll = async () => {
  return await Order.find();
};

exports.getOneByOrderId = async (orderId) => {
  return await Order.findOne({ order_id: orderId });
};

exports.updateOne = async (orderId, updateData) => {
  return await Order.findOneAndUpdate({ order_id: orderId }, updateData, { new: true });
};

exports.deleteOne = async (orderId) => {
  return await Order.findOneAndDelete({ order_id: orderId });
};
