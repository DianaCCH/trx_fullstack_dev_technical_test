const app = require("./src/app")
const vehicleRoutes = require("./src/v1/routes/vehicleRoutes");
var cors = require('cors')
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use("/api/v1/vehicle", vehicleRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});