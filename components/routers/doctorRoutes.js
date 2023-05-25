const express = require('express');
const doctorController = require('../controllers/doctorController');

const doctorRouter = express.Router();

doctorRouter.post('/register',doctorController.registerDoctor)
doctorRouter.post('/login',doctorController.loginDoctor)

module.exports = doctorRouter;