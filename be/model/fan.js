const mongoose = require('mongoose');
const fanSchema = new mongoose.Schema(
  {
    // airline_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"airline"
    // },
    // airlineName: String,
    fanId:{
        type: Number,
        required: true,
    },
    fanName: {
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
    speed: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    dimensions: {
      type: Number,
      required: false,
    },
    design: {
      type: String,
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
    userId: {
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
    weeklyUsage: {
        type: Number,
        required: true,
    },
    monthlyUsage: {
        type: Number,
        required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model('Fan', fanSchema);
