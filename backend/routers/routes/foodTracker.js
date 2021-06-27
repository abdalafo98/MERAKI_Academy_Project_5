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
  updateBreakfast,
  updateSnack,
  updateLunch,
  updateDinner,
  updateGlassesOfWater,
  updateActiveTime,
} = require("./../controllers/foodTracker");

const foodTracker = express.Router();
//post
foodTracker.post("/foodTracker", authentication, createFoodTracker);
foodTracker.post("/breakfast", authentication, addToBreakfast);
foodTracker.post("/snack", authentication, addToSnack);
foodTracker.post("/lunch", authentication, addToLunch);
foodTracker.post("/dinner", authentication, addToDinner);
foodTracker.post("/glassesofwater", authentication, addToGlassesOfWater);
foodTracker.post("/activetime", authentication, addToActiveTime);

//put
foodTracker.put("/breakfast", authentication, updateBreakfast);
foodTracker.put("/snack", authentication, updateSnack);
foodTracker.put("/lunch", authentication, updateLunch);
foodTracker.put("/dinner", authentication, updateDinner);
foodTracker.put("/glassesofwater", authentication, updateGlassesOfWater);
foodTracker.put("/activetime", authentication, updateActiveTime);

//delete

foodTracker.post("/foodTracker", authentication, createFoodTracker);
foodTracker.put("/foodTracker", authentication, updateFoodTracker);

module.exports = foodTracker;
