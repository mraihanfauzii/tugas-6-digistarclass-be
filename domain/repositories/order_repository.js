const Order = require('../models/order_model');

const create = async (order) => {
  const newOrder = new Order(order);
  return await newOrder.save();
};

const findAll = async () => {
  return await Order.find();
};

const getOneByOrderId = async (orderId) => {
  return await Order.findOne({ order_id: orderId });
};

const updateOne = async (orderId, updateData) => {
  return await Order.findOneAndUpdate({ order_id: orderId }, updateData, { new: true });
};

const deleteOne = async (orderId) => {
  return await Order.findOneAndDelete({ order_id: orderId });
};

module.exports = { create, findAll, getOneByOrderId, updateOne, deleteOne };
