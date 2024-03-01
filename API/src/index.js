const express = require("express");
const vehicleRoutes = require("./v1/routes/vehicleRoutes");
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use("/api/v1/vehicle", vehicleRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});