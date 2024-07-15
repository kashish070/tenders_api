const TenderModel = require("../models/testing");

class TenderController {
  static Tender_insert = async (req, res) => {
    try {
      const { name, description, start_time, end_time, buffer_time } = req.body;
      const result = new TenderModel(req.body);
      if (!result) {
        return res
          .status(404)
          .json({ status: "fail", message: "tender data not found" });
      }
      const savetender = await result.save();
      res.status(200).json({
        status: "SUCCESS",
        message: "Tender Registration Successful",
        savetender,
      });
    } catch (error) {
      console.error("Error during Tender insertion:", error); // Additional logging
      res.status(500).json({ status: "Failed", message: error.message });
    }
  };

  static getALL = async (req, res) => {
    try {
      const data = await TenderModel.find();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  };

  static getALLBYID = async (req, res) => {
    try {
      const tender = await TenderModel.findById(req.params.id);
      if (!tender) {
        return res.status(404).json({ message: "Tender not found" });
      }
      res.status(200).json(tender);
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ status: "failed", message: error.message });
    }
  };

  static UpdateTender = async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        description: req.body.description,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        buffer_time: req.body.buffer_time,
      };

      if (!data) {
        // If data is not provided, send a 404 error
        res
          .status(404)
          .json({ status: "Failed", message: "Data not provided" });
      } else {
        // Assuming you have a Tender model, you can update it like this
        const updatedTender = await TenderModel.findByIdAndUpdate(
          req.params.id,
          data,
          { new: true }
        );

        if (!updatedTender) {
          // If the tender with the given ID is not found, send a 404 error
          res
            .status(404)
            .json({ status: "Failed", message: "Tender not found" });
        } else {
          // If successfully updated, send the updated tender object as response
          res.status(200).json({ status: "Success", data: updatedTender });
        }
      }
    } catch (error) {
      // If any error occurs during the update process, handle it here
      res.status(500).json({ status: "Failed", message: error.message });
    }
  };

  static deleteTender = async (req, res) => {    try {
    const id = req.params.id;      const userExit = await TenderModel.findById(id)
    if (!userExit) {        return res.status(404).json({ msg: "User not exist" })
    }      await TenderModel.findByIdAndDelete(id)
    res.status(200).json({ msg: "User delted successfully" })    }
  catch (error) {      console.log(error.message)
    res.status(400).json({ status: "failed", message: error.message })    }
}
}

module.exports = TenderController;
