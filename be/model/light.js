const mongoose = require('mongoose');
const lightSchema = new mongoose.Schema(
  {
    // airline_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"airline"
    // },
    // airlineName: String,
    lightId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    lightName: {
      type: String,
      required: true,
    },
    marker: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    illumination: {
        type: String,
        required: true,
      },
    illuminationTime: {
      type: Number,
      required: true,
    },
    wattage: {
        type: Number,
        required: false,
    },
    dimensions: {
      type: Number,
      required: false,
    },
    deploymentDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    installationDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model('Light', lightSchema);
