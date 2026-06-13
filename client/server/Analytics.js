const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema(
  {
    revenue: {
      type: Number,
      default: 0
    },

    users: {
      type: Number,
      default: 0
    },

    sales: {
      type: Number,
      default: 0
    },

    visitors: {
      type: Number,
      default: 0
    },

    conversionRate: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Analytics",
  AnalyticsSchema
);