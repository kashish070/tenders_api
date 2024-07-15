
const mongoose = require("mongoose");

const tender = () => {
  return mongoose
    .connect(process.env.Local_URL, {
      serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds instead of 10
      socketTimeoutMS: 45000, // Socket timeout after 45 seconds
      connectTimeoutMS: 30000, // Connection timeout after 30 seconds
    })
    .then((data) => {
      console.log("Database is connected successfully");
    })
    .catch((error) => {
      console.log("Connection error:", error);
    });
};

module.exports = tender;
