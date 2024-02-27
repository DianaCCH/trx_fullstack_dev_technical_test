const vehicle = require("../dataAccess/vehicle");

const getAllVehicles = async (filterParams) => {
  try {
    const allVehicles = await vehicle.getAllVehicles();

    if (allVehicles?.error) {
      throw { status: 500, message: error?.message || error };
    }
    const filteredVehicles = allVehicles.vehicles?.filter(vehicle => {
      let isValid = true;
      for (key in filterParams) {
        // console.log(key, vehicle[key], filterParams[key]);
        isValid = isValid && vehicle[key] == filterParams[key];
      }
      return isValid;
    });
    return filteredVehicles;
  } catch (error) {
    throw error;
  }
};

const createNewVehicle = async (newVehicle) => {
  try {
    const { status, statusText } = await vehicle.createNewVehicle(newVehicle);

    if (status != 201) {
      throw { status: status, message: statusText };
    }
    const allVehicles = await vehicle.getAllVehicles();

    if (allVehicles?.error) {
      throw { status: 500, message: error?.message || error };
    }
    return allVehicles.vehicles;
  } catch (error) {
    throw error;
  }
};

const updateVehicle = async (vehicleId, changes) => {
  try {
    const updatedVehicle = await vehicle.updateVehicle(vehicleId, changes);
    if (updatedVehicle?.error) {
      throw { status: 500, message: error?.message || error };
    }
    return updatedVehicle.vehicles;
  } catch (error) {
    throw error;
  }
};

const deleteVehicle = async (vehicleId) => {
  try {
    const deletedVehicle = await vehicle.deleteVehicle(vehicleId);
    if (deletedVehicle?.error) {
      throw { status: 500, message: error?.message || error };
    }
    return deletedVehicle.vehicles;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllVehicles,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};