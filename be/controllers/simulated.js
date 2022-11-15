const mongoose = require('mongoose');
const simulatedSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    work_Status: {
      type: String,
      required: true,
    },
    electricity_capacity: {
      type: String,
    },
    water_capacity: {
      type: String,
    },
    Voltage: {
      type: String,
    },
    Current: {
      type: String,
    },
    Total_Usage: {
      type: String,
    },
    Last_24_hr: {
      type: String,
    },
    weekUsage: {
        type: String,
    },
    monthUsage: {
        type: String,
    },
    yearUsage: {
        type: String,
    },
    type: {
      type: String,
      
  },
  },

  { timestamps: true }
);

module.exports = mongoose.model('Simulated', simulatedSchema);
