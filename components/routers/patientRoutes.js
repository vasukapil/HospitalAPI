const express = require('express');
const patientController = require('../controllers/patientController');

// Create an instance of the Express router
const patientRouter = express.Router();

patientRouter.post('/register', patientController.registerPatient);
patientRouter.post('/:id/create_report', patientController.createPatientReport);
patientRouter.get('/:id/all_reports', patientController.getAllPatientReports);

module.exports = patientRouter;