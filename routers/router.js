const express = require('express');
const router = express.Router();

// Import handlers
const userHandler = require('../handlers/user_handler');
const orderHandler = require('../handlers/order_handler');
const itemHandler = require('../handlers/item_handler');
const jwtAuth = require('../middlewares/jwt'); // JWT authentication middleware
const checkAdmin = require('../middlewares/checkAdmin'); // Admin verification middleware

// =================== User Routes ===================
router.post('/users/register', userHandler.register);
router.post('/users/login', userHandler.login);
router.get('/users', jwtAuth, checkAdmin, userHandler.getList); // Only admin can get the user list
router.get('/users/:id', jwtAuth, userHandler.getOneByUserId);
router.put('/users/:id', jwtAuth, userHandler.updateOne);
router.delete('/users/:id', jwtAuth, checkAdmin, userHandler.deleteOne); // Only admin can delete users

// =================== Order Routes ===================
router.post('/orders', jwtAuth, orderHandler.create); // Both admin and customer can create an order
router.get('/orders', jwtAuth, orderHandler.getList);
router.get('/orders/:id', jwtAuth, orderHandler.getOneByOrderId);
router.put('/orders/:id', jwtAuth, orderHandler.updateOne); // Admin can update orders
router.delete('/orders/:id', jwtAuth, checkAdmin, orderHandler.deleteOne); // Only admin can delete orders

// =================== Item Routes ===================
router.post('/items', jwtAuth, checkAdmin, itemHandler.create); // Only admin can create items
router.get('/items', itemHandler.getList); // Public, no authentication needed
router.get('/items/:id', itemHandler.getOneByItemId); // Public, no authentication needed
router.put('/items/:id', jwtAuth, checkAdmin, itemHandler.updateOne); // Only admin can update items
router.delete('/items/:id', jwtAuth, checkAdmin, itemHandler.deleteOne); // Only admin can delete items

module.exports = router;