const express = require('express');
const app = express();
const databaseConnect = require('./components/databaseConnect')
const doctorRouter = require("./components/routers/doctorRoutes");
const patientRouter = require("./components/routers/patientRoutes");
const reportRouter = require("./components/routers/reportRoutes");


app.use(express.json());
app.use('/doctors', doctorRouter);
app.use('/patient', patientRouter);
app.use('/',reportRouter)
app.listen(5000, (req, res) => {
    console.log("backend is running");
  });
  