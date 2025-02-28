const {Group, User} = require('../models');
const NotFoundError = require('../errors/NotFoundError');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const createdGroup = await Group.create(body);
        res.status(201).send({data: createdGroup});
    }catch(error) {
        next(error);
    }
};

module.exports.addUserToGroup = async (req, res, next) => {
    try {
        const {params: {groupId, userId}} = req;
        const groupInstanse = await Group.findByPk(Number(groupId));
        const userInstanse = await User.findByPk(Number(userId));
        if(groupInstanse && userInstanse) {
            await groupInstanse.addUser(userInstanse);
            res.status(200).send({
                meta: {
                    groupAdded: groupId
                }
            })
        } else {
            throw new NotFoundError();
        }
        
    } catch(error) {
        next(error);
    }
} 

module.exports.getUsersGroup = async (req, res, next) => {
    try {

    }catch(error) {

    }
};

module.exports.updateGroup = async (req, res, next) => {
    try {

    }catch(error) {

    }
};

module.exports.removeUserFromGroup = async (req, res, next) => {
    try {

    }catch(error) {

    }
};

module.exports.deleteGroup = async (req, res, next) => {
    try {

    }catch(error) {

    }
};