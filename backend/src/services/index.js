

const TaskService = require("./task.service");

const TaskServiceInstance = new TaskService();
console.log(
  TaskServiceInstance.find,
  TaskServiceInstance.create,
  TaskServiceInstance.update,
  TaskServiceInstance.delete
);