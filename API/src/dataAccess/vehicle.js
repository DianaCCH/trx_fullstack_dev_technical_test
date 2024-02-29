const { createClient } = require('@supabase/supabase-js');
require('dotenv').config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.API_KEY);

const getAllVehicles = async () => {
  try {
    const { data, error } = await supabase.from('vehicles').select('*').eq('estatus', true);
    return { vehicles: data, error: error };
  } catch (error) {
    return error;
  }
};

const createNewVehicle = async (newVehicle) => {
  try {
    const { status, statusText } = await supabase
      .from('vehicles')
      .insert(newVehicle);
    return { status, statusText };
  } catch (error) {
    return error;
  }
};

const updateVehicle = async (vehicleId, changes) => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .update(changes)
      .eq('id', vehicleId)
      .select();
    return { vehicles: data, error: error };
  } catch (error) {
    return error;
  }
};

const deleteVehicle = async (vehicleId) => {
  try {
    const { status, statusText } = await supabase
      .from('vehicles')
      .update({ estatus: false })
      .eq('id', vehicleId)
    return { status, statusText };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllVehicles,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};