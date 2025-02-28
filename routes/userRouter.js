const express = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const userRouter = express.Router();

userRouter.post('/', UserController.createOne); // create
userRouter.get('/', UserController.getAll); //read all
userRouter.get('/:userId', UserController.getOne); //read one
userRouter.put('/:userId', UserController.updateOne); // update one
userRouter.delete('/:userId', UserController.deleteOne); //delete one
userRouter.get('/:userId/groups', UserController.getUserWithGroups);


module.exports = userRouter;