const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  deteteTask,
  getTask,
} = require("../controllers/tasks");

//setting up routes
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deteteTask);
module.exports = router;
