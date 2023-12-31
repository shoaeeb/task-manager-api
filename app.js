const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notfound");
const port = process.env.PORT || 3000;
require("dotenv").config();
//routess
app.use(express.static("./public"));
//middleware

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
//api.get("api/v1/tasks") - get all the tasks
//api.post("api/v1/tasks") - create a new task
//api.get("api/v1/tasks/:id") - get a single task
//api.patch("api/v1/tasks/:id") - update a task
//api.delete("api/v1/tasks/:id") - delete a task
