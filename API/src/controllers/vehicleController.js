const vehicleService = require("../services/vehicleService");

const getAllVehicles = async (req, res) => {
  try {
    const allVehicles = await vehicleService.getAllVehicles();
    res.send({ status: "OK", data: allVehicles });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewVehicle = async (req, res) => {
  const { body } = req;

  if (
    !body.placa ||
    !body.numero_economico ||
    !body.vim ||
    !body.asientos ||
    !body.seguro ||
    !body.numero_seguro ||
    !body.marca ||
    !body.modelo ||
    !body.anio ||
    !body.color

  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'placa', 'numero_economico', 'vim', 'asientos', 'seguro', 'numero_seguro', 'marca', 'modelo', 'anio', 'color'",
      },
    });
  }

  const newVehicle = {
    placa: body.placa,
    numero_economico: body.numero_economico,
    vim: body.vim,
    asientos: body.asientos,
    seguro: body.seguro,
    numero_seguro: body.numero_seguro,
    marca: body.marca,
    modelo: body.modelo,
    anio: body.anio,
    color: body.color,
    destino: "29.972839, -90.065639"
  };

  try {
    const allVehicles = await vehicleService.createNewVehicle(newVehicle);
    res.status(201).send({ status: "OK", data: allVehicles });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILDED", data: { error: error?.message || error } });
  }
};

const updateVehicle = async (req, res) => {
  const {
    body,
    params: { vehicleId },
  } = req;

  if (!vehicleId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':vehicleId' can not be empty" },
    });
  }

  try {
    const updatedVehicle = await vehicleService.updateVehicle(vehicleId, body);
    res.send({ status: "OK", data: updatedVehicle });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteVehicle = async (req, res) => {
  const {
    params: { vehicleId },
  } = req;

  if (!vehicleId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':vehicleId' can not be empty" },
    });
  }

  try {
    const deletedVehicle = await vehicleService.deleteVehicle(vehicleId);
    res.send({ status: "OK", data: deletedVehicle });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getVehiclesByFilter = async (req, res) => {
  try {
    const filters = req.query;
    const allVehicles = await vehicleService.getVehiclesByFilter(filters);
    res.send({ status: "OK", data: allVehicles });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllVehicles,
  getVehiclesByFilter,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};