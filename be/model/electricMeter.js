const mongoose = require('mongoose');
const electricMeterSchema = new mongoose.Schema(
  {
    // airline_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"airline"
    // },
    // airlineName: String,
    electricMeterId:{
        type:String,
    },
    electricMeterName: {
      type: String,
    },
    location: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    model: {
      type: String,
    },
    electricCapacity: {
      type: String,
    },
    installationMethod: {
      type: String,
    },
    meausurementAccuracy: {
        type: String,
      },
    dimensions: {
      type: String,
    },
    deploymentDate: {
        type: Date,
        default: Date.now,
    },
    installationDate: {
        type: Date,
        default: Date.now,
    },
    power: {
        type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model('ElectricMeter', electricMeterSchema);
