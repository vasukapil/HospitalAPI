const express = require('express');
const reportController = require('../controllers/reportController');

const reportRouter = express.Router();

reportRouter.get('/reports/:status', reportController.getReportsByStatus);

module.exports = reportRouter;