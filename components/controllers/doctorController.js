const doctorModel = require('../models/doctorModel')
const jwt = require('jsonwebtoken');

module.exports.registerDoctor = async function(req, res){
    console.log(req.body);
    let registerDoctor = await doctorModel.create(req.body)
    res.json({
        message: "kuch aayaaaaaaaaaaaa",
        data: registerDoctor,
    })
}


module.exports.loginDoctor = async function (req, res) {
    const { username, password } = req.body;
    console.log(req.body);
  
    try {
      // Find the doctor with the provided username
      const doctor = await doctorModel.findOne({ username });
  
      // Check if the doctor exists
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      // Check if the password is correct
      if (doctor.password !== password) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
  
      // Doctor credentials are valid, generate a JWT
      const payload = {
        doctorId: doctor._id, // Add any additional data to the payload if needed
      };
  
      const token = jwt.sign(payload, 'abcdefghijklmnopqrstuvwxyz'); // Replace 'your-secret-key' with your own secret key
  
      res.json({
        message: 'Doctor login successful',
        token: token,
      });
    } catch (error) {
      console.error('Error logging in doctor:', error);
      res.status(500).json({ error: 'An error occurred while logging in doctor' });
    }
  };
