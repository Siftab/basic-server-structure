const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send({ Massage: "great Job sifat" });
});

app.listen(port, () => {
  console.log("test server is ok");
});
