const {Task, User} = require('../models');


module.exports.createTask = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const task = await Task.create({...body, userId});
        res.status(201).send({data: task});
    } catch(e) {

    }
}

module.exports.getTask = () => {}

module.exports.getAllUserTasks = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findByPk(userId);
        const allUserTasks = await user.getTasks();
        res.status(200).send({data: allUserTasks})
    } catch(error) {

    }
}

module.exports.updateTask = () => {}

module.exports.deleteTask = () => {}
