const express = require("express");
const vehicleController = require("../../controllers/vehicleController");
const router = express.Router();
router
  .get("/", vehicleController.getAllVehicles)
  .get("/getVehiclesByFilter", vehicleController.getVehiclesByFilter)
  .post("/createNewVehicle", vehicleController.createNewVehicle)
  .patch("/updateVehicle/:vehicleId", vehicleController.updateVehicle)
  .delete("/deleteVehicle/:vehicleId", vehicleController.deleteVehicle);

module.exports = router;