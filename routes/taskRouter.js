const express = require('express');
const TaskController = require('../controllers/Task.controller');
const taskRouter = express.Router();


taskRouter.post('/user/:userId', TaskController.createTask);
taskRouter.get('/user/:userId', TaskController.getAllUserTasks);
taskRouter.get('/user/:userId/count', TaskController.countUserTasks);
taskRouter.put('/:taskId', TaskController.updateTask);
taskRouter.delete('/:taskId', TaskController.deleteTask);

module.exports = taskRouter;