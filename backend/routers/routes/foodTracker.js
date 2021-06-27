const express = require("express");
const authentication = require("./../middlewares/authentication");
const {
  createFoodTracker,
  updateFoodTracker,
  addToBreakfast,
  addToSnack,
  addToLunch,
  addToDinner,
  addToGlassesOfWater,
  addToActiveTime,
} = require("./../controllers/foodTracker");

const foodTracker = express.Router();

foodTracker.post("/foodTracker", authentication, createFoodTracker);
foodTracker.post("/breakfast", authentication, addToBreakfast);
foodTracker.post("/snack", authentication, addToSnack);
foodTracker.post("/lunch", authentication, addToLunch);
foodTracker.post("/dinner", authentication, addToDinner);
foodTracker.post("/glassesofwater", authentication, addToGlassesOfWater);
foodTracker.post("/activetime", authentication, addToActiveTime);
foodTracker.post("/foodTracker", authentication, createFoodTracker);
foodTracker.put("/foodTracker", authentication, updateFoodTracker);

module.exports = foodTracker;
