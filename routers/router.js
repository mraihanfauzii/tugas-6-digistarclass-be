const express = require('express');
const router = express.Router();

// Import handlers
const userHandler = require('../handlers/user_handler');
const roleHandler = require('../handlers/role_handler');
const orderHandler = require('../handlers/order_handler');
const jwtAuth = require('../middlewares/jwt'); // JWT authentication middleware

// =================== User Routes ===================
router.post('/users/register', userHandler.register);
router.post('/users/login', userHandler.login);

// =================== Role Routes ===================
router.post('/roles', jwtAuth, roleHandler.create);
router.get('/roles', jwtAuth, roleHandler.getList);

// =================== Order Routes ===================
router.post('/orders', jwtAuth, orderHandler.create);
router.get('/orders', jwtAuth, orderHandler.getList);

module.exports = router;
