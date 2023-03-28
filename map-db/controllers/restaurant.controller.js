const resModel = require("../models/restaurant.models");

exports.getRestaurants = async (req, res) => {
  try {
    const result = await resModel.find().limit(300);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
