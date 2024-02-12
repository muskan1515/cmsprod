const express = require("express");
const bodyParser = require("body-parser");

const claimRoutes = require("./Routes/claimRoutes");
const depreciationRoutes = require("./Routes/depreciationRoutes");
const emailRoutes = require("./Routes/emailRoutes");
const finalReportRoutes=require("./Routes/finalReportRoutes");
const labourerRoutes = require("./Routes/labourerRoute");
const loginRoute=require("./Routes/loginRoute");
const newPartsRoute = require("./Routes/newPartsRoute");
const statusRoute=require("./Routes/statusRoute");
const uploadRoute = require("./Routes/uploadRoute");
const vehicleDetailsRoute = require("./Routes/vehicleDetailRoutes");
const reportRoutes = require("./Routes/reportRoutes");

const dotenv = require("dotenv").config();

const port = process.env.PORT || 3006;
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


app.use("/claim",claimRoutes);

app.use("/depreciation",depreciationRoutes);

app.use("/email",emailRoutes);

app.use("/finalReport",finalReportRoutes);

app.use("/labourer",labourerRoutes);

app.use("/login",loginRoute);

app.use("/newParts",newPartsRoute);

app.use("/status",statusRoute);

app.use("/upload",uploadRoute);

app.use("/report",reportRoutes);

app.use("/vehicleDetails",vehicleDetailsRoute);

app.use("/report",reportRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
