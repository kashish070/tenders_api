const express = require("express");
const route = express.Router();
const TenderController = require("../controllers/TenderController");

route.post("/insert", TenderController.Tender_insert);
route.get("/view", TenderController.getALL);
route.get("/viewbyid/:id", TenderController.getALLBYID);
route.post("/update/:id", TenderController.UpdateTender);
route.get("/delete/:id",TenderController.deleteTender)

module.exports = route;
