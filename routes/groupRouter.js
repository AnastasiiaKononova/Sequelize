const exress = require('express');
const multer = require('multer');
const GroupController = require('../controllers/Group.controller');
const path = require('path');

const groupRouter = exress.Router();

const STATIC_PATH = path.resolve(__dirname, '../public/images');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  })

 const upload = multer({ storage });


groupRouter.post('/', GroupController.createOne);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);
groupRouter.get('/:groupId', GroupController.getGroupWithMembers);
groupRouter.get('/:groupId/count', GroupController.countUsersInGroup);
groupRouter.delete('/:groupId', GroupController.deleteGroup);


groupRouter.post('/:groupId/:userId', upload.single('image'), GroupController.createImage);



module.exports = groupRouter;