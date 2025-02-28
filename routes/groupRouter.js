const exress = require('express');
const GroupController = require('../controllers/Group.controller');

const groupRouter = exress.Router();

groupRouter.post('/', GroupController.createOne);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);

module.exports = groupRouter;