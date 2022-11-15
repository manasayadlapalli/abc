const mongoose = require('mongoose');
const lightSchema = new mongoose.Schema(
  {
    // airline_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"airline"
    // },
    // airlineName: String,
    lightId:{
      type: Number,
      required: true,    
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
      required: false,
  },
  installationDate: {
      type: Date,
      default: Date.now,
      required: false,
  },
    power: {
        type: Number,
        required: true,
    },
    cloudStatus: {
      type: Number,
      required: true,
  },
  workingStatus: {
      type: Number,
      required: true,
  },
  activeStatus: {
      type: Number,
      required: true,
  },

  },
  { timestamps: true }
);

module.exports = mongoose.model('Light', lightSchema);
