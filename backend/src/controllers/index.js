// Controllers index file to export all controllers

const { getTasks, createTask, updateTask, deleteTask } = require("./task.controller");

module.exports = {
    getTasks, createTask, updateTask, deleteTask
};