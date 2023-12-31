const mongoose = require("mongoose");
//creating a schema
//just like the field of a table  in sql
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//wrapping the schema in a model
//just like a table in sql
module.exports = mongoose.model("Task", TaskSchema);
