const reportModel = require('../models/reportModel')

module.exports.getReportsByStatus = async function(req, res){
    const { status } = req.params;

    try {
      const reports = await reportModel.find({ status });
  
      res.json({
        message: 'yesssss,Reports retrieved successfully',
        data: reports,
      });
    } catch (error) {
      console.error('Error ', error);
      res.status(500).json({ error: 'An error occurred while retrieving the reports by status' });
    }
  };
