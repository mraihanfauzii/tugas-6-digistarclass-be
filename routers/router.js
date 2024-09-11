const express = require('express');
const router = express.Router();

// Import handlers
const userHandler = require('../handlers/user_handler');
const roleHandler = require('../handlers/role_handler');
const orderHandler = require('../handlers/order_handler');
const customerHandler = require('../handlers/customer_handler');
const itemHandler = require('../handlers/item_handler');
const jwtAuth = require('../middlewares/jwt'); // JWT authentication middleware

// =================== User Routes ===================
router.post('/users/register', userHandler.register);
router.post('/users/login', userHandler.login);
router.get('/users', jwtAuth, userHandler.getList);
router.get('/users/:id', jwtAuth, userHandler.getOneByUserId);
router.put('/users/:id', jwtAuth, userHandler.updateOne);
router.delete('/users/:id', jwtAuth, userHandler.deleteOne);

// =================== Role Routes ===================
router.post('/roles', jwtAuth, roleHandler.create);
router.get('/roles', jwtAuth, roleHandler.getList);
router.get('/roles/:id', jwtAuth, roleHandler.getOneByRoleId);
router.put('/roles/:id', jwtAuth, roleHandler.updateOne);
router.delete('/roles/:id', jwtAuth, roleHandler.deleteOne);

// =================== Order Routes ===================
router.post('/orders', jwtAuth, orderHandler.create);
router.get('/orders', jwtAuth, orderHandler.getList);
router.get('/orders/:id', jwtAuth, orderHandler.getOneByOrderId);
router.put('/orders/:id', jwtAuth, orderHandler.updateOne);
router.delete('/orders/:id', jwtAuth, orderHandler.deleteOne);

// =================== Customer Routes ===================
router.post('/customers', jwtAuth, customerHandler.create);
router.get('/customers', jwtAuth, customerHandler.getList);
router.get('/customers/:id', jwtAuth, customerHandler.getOneByCustomerId);
router.put('/customers/:id', jwtAuth, customerHandler.updateOne);
router.delete('/customers/:id', jwtAuth, customerHandler.deleteOne);

// =================== Item Routes ===================
router.post('/items', jwtAuth, itemHandler.create);
router.get('/items', jwtAuth, itemHandler.getList);
router.get('/items/:id', jwtAuth, itemHandler.getOneByItemId);
router.put('/items/:id', jwtAuth, itemHandler.updateOne);
router.delete('/items/:id', jwtAuth, itemHandler.deleteOne);

module.exports = router;
