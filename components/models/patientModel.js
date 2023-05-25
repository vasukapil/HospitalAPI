const mongoose = require("mongoose");
  const patientSchema = mongoose.Schema({
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    name: { type: String, required: true}
});
const patientModel = mongoose.model("patientModel", patientSchema);
module.exports = patientModel;
