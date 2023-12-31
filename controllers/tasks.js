const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); //find all tasks
    res.status(200).json({ tasks }); //send the tasks as a json
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); //create a new task
    res.status(201).json({ task }); //send the task as a json
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id }); //get a particular task
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).json({ task }); //send the task as a json
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deteteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id }); //delete a particular task
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).json({ task }); //send the task as a json
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const { name, completed } = req.body;
    const task = await Task.findOneAndReplace(
      { _id: taskID },
      { name, completed },
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).json({ task }); //send the task as a json
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = { getAllTasks, createTask, getTask, updateTask, deteteTask };
