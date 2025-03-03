const { Group, User } = require("../models");
const NotFoundError = require("../errors/NotFoundError");

module.exports.createOne = async (req, res, next) => {
  try {
    const { body } = req;
    const createdGroup = await Group.create(body);
    res.status(201).send({ data: createdGroup });
  } catch (error) {
    next(error);
  }
};

module.exports.addUserToGroup = async (req, res, next) => {
  try {
    const {
      params: { groupId, userId },
    } = req;
    const groupInstanse = await Group.findByPk(Number(groupId));
    const userInstanse = await User.findByPk(Number(userId));
    if (groupInstanse && userInstanse) {
      await groupInstanse.addUser(userInstanse);
      res.status(200).send({
        meta: {
          groupAdded: groupId,
        },
      });
    } else {
      throw new NotFoundError();
    }
  } catch (error) {
    next(error);
  }
};


module.exports.updateGroup = async (req, res, next) => {
  try {
  } catch (error) {}
};

module.exports.removeUserFromGroup = async (req, res, next) => {
  try {
    // прийняти userId, groupId, знайти інстанс групи і юзера, видалити юзера з групи
    const {
      params: { userId, groupId },
    } = req;
    const groupInstanse = await Group.findByPk(Number(groupId));
    const userInstanse = await User.findByPk(Number(userId));
    if (groupInstanse && userInstanse) {
      await groupInstanse.removeUser();
      res.status(200).send({
        meta: {
          removedUser: userId,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.deleteGroup = async (req, res, next) => {
  try {
     // прийняти id групи і видалити її
  } catch (error) {}
};

module.exports.getGroupWithMembers = async (req, res, next) => {
    try {
        const {params: {groupId}} = req;
        const groupWithmembers = await Group.findAll({
            where: {
                id: Number(groupId),
            },
            include: [{
                model: User,
                attributes: {
                   exclude: ['password']
                }
            }]
        });
        res.status(200).send({
            data: groupWithmembers
        })
    } catch(error) {
        next(error);
    }
}


/// Написати метод контроллера + ручку для отримання групи з кількістю учасників в ній
// за допомогою groupId

module.exports.countUsersInGroup = async (req, res, next) => {
    try {
        const {params: {groupId}}= req;
        const groupInstanse = await Group.findByPk(Number(groupId));
        const countMembers = await groupInstanse.countUsers();
        res.status(200).send({
            meta: {
                countMembers
            }
        })
    } catch(error) { 
        next(error)
    }
}