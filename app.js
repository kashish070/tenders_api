const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DB = require("./db/tender");
const api = require("./routes/api");
const fileupload = require("express-fileupload");
const cookie=require("cookie-parser")

const cors = require("cors");
const cookie = require("cookie-parser");

app.use(
  fileupload({
    useTempFiles: true,
  })
);
app.use(cors());



app.use(cookie())
// Get data
app.use(express.json());

dotenv.config({
  path: ".env",
});

DB();
// route load
// localhost:2000/api/
app.use("/api", api);

app.listen(process.env.PORT, () =>
  console.log(`server start locatlhost:${process.env.PORT}`)
);
// localhost:2000/api/teacherDisplay/(search this)
