const neighborModel = require("../models/neighborhood.models");

exports.getNeighborhoods = async (req, res) => {
  try {
    const result = await neighborModel.find().limit(5);
    res.json({ status: true, result });
  } catch (err) {
    console.log(err);
    res.json({ status: false, message: err });
  }
};
