const exress = require('express');
const GroupController = require('../controllers/Group.controller');

const groupRouter = exress.Router();

groupRouter.post('/', GroupController.createOne);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);
groupRouter.get('/:groupId', GroupController.getGroupWithMembers);
groupRouter.get('/:groupId/count', GroupController.countUsersInGroup);
groupRouter.delete('/:groupId', GroupController.deleteGroup);

module.exports = groupRouter;