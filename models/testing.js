const mongoose = require("mongoose");
const TestingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    start_time: {
      type: String,
      require: true,
    },
    end_time: {
      type: String,
      require: true,
    },
    buffer_time: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const TestingModel = mongoose.model("testing", TestingSchema);
module.exports = TestingModel;
