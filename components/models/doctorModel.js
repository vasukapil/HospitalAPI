const mongoose = require("mongoose");
  const doctorSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true,
      },
   contact : {
    type : String,
   }
});
const doctorModel = mongoose.model("doctorModel", doctorSchema);
module.exports = doctorModel;
