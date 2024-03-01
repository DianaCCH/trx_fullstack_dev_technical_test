const vehicle = require("../dataAccess/vehicle");

const getAllVehicles = async () => {
  try {
    const allVehicles = await vehicle.getAllVehicles();

    if (allVehicles?.error) {
      throw { status: 500, message: error?.message || error };
    }
    return allVehicles.vehicles;
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
    const { status, statusText } = await vehicle.deleteVehicle(vehicleId);
    if (status != 204) {
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

const getVehiclesByFilter = async (filterParams) => {
  try {
    const allVehicles = await vehicle.getAllVehicles();

    if (allVehicles?.error) {
      throw { status: 500, message: error?.message || error };
    }
    const key = Object.keys(filterParams)[0];
    const values = filterParams[key].split(",")
    const filteredData = [];
    allVehicles.vehicles?.forEach(item => {
      values.forEach(value => {
        if (item[key].toLowerCase() == value.toLowerCase()) {
          filteredData.push(item);
        }
      });
    });
    return filteredData;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllVehicles,
  getVehiclesByFilter,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};