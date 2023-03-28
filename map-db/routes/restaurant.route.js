const { Router } = require("express");
const { getNeighborhoods } = require("../controllers/neighborhood.controller");
const res = require("../controllers/restaurant.controller");
// const res = require("../controllers/restaurant.controller");

const route = Router();

route.get("/restaurants", res.getRestaurants);

// route.get("/neighborhoods/:_id", neighborhoods.getNeighborhoodsOne);
// route.post("/currentNeighborHood/", neighborhoods.findCurrentNeighborHood);
// route.post("/findAllRes/", neighborhoods.findAllRestaurantsInNeighborhood);
route.post("/allRestaurants", res.getRestaurants);

module.exports = route;
