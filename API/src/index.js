const express = require("express");
const vehicleRoutes = require("./v1/routes/vehicleRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/vehicle", vehicleRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});