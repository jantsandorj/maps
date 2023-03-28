const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const neighborhoodRouter = require("./routes/neighborhood.route");
const resRouter = require("./routes/restaurant.route");

app.use("/api", neighborhoodRouter);
app.use("/api", resRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Success" });
});
app.listen(process.env.port, () => {
  console.log("Server is running on" + process.env.port);
});
