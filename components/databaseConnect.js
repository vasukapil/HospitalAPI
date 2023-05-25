const mongoose = require("mongoose");
const db_link =
"mongodb+srv://vasukapil:uW4pQ5kI4Lg0xvxz@cluster0.loahips.mongodb.net/?retryWrites=true&w=majority"

const databaseConnect = (function () {
  mongoose
    .connect(db_link)
    .then(() => {
      console.log("database connection established");
    })
    .catch(function (err) {
      console.log(err);
    });
})();

module.exports = databaseConnect;