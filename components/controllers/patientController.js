const patientModel = require('../models/patientModel')

module.exports.registerPatient = async function(req, res){
    console.log(req.body);
    let registerPatient = await patientModel.create(req.body)
    res.json({
        message: "kuch aayaaaaaaaaaaaa",
        data: registerPatient,
    })
}

module.exports.createPatientReport = async function(req, res){

    const patientId = req.params.id;
  const { status, date, requiredRoutes } = req.body;

  try {
    const patient = await patientModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const report = await reportModel.create({
      created_by: patientId,
      status,
      date,
      required_routes: requiredRoutes,
    });

    res.json({
      message: 'Patient report created successfully',
      data: report,
    });
  } catch (error) {
    console.error('Error creating patient report:', error);
    res.status(500).json({ error: 'An error occurred while creating the patient report' });
  }
}
module.exports.getAllPatientReports = async function(req, res) {
    const patientId = req.params.id;
  
    try {
      const patient = await patientModel.findById(patientId);
  
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
  
      const reports = await reportModel.find({ created_by: patientId }).sort({ date: 1 });
  
      res.json({
        message: 'Patient reports retrieved successfully',
        data: reports,
      });
    } catch (error) {
      console.error('Error retrieving patient reports:', error);
      res.status(500).json({ error: 'An error occurred while retrieving the patient reports' });
    }
  };
