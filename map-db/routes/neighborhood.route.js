const { Router } = require("express");
const neighborhoods = require("../controllers/neighborhood.controller");

const route = Router();

route.get("/neighborhoods", neighborhoods.getNeighborhoods);

// route.get("/neighborhoods/:_id", neighborhoods.getNeighborhoodsOne);
// route.post("/currentNeighborHood/", neighborhoods.findCurrentNeighborHood);
// route.post("/findAllRes/", neighborhoods.findAllRestaurantsInNeighborhood);
route.post("/allNeighborhoods", neighborhoods.getNeighborhoods);

module.exports = route;
