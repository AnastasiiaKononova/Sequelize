const {Task, User} = require('../models');


module.exports.createTask = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const task = await Task.create({...body, userId});
        res.status(201).send({data: task});
    } catch(e) {
        res.status()
    }
}

module.exports.getTask = () => {
    // отримання конкретної таски
// /users/:userId/tasks/:taskId
}

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

module.exports.deleteTask = () => {
    // видалення конкретної таски
}

module.exports.countUserTasks = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        // зробити за допомггою магічного методу 
        // user.countTasks()
        const user = await User.findByPk(Number(userId));
        const countTasks = await user.countTasks();
        res.status(200).send({data: countTasks});
    } catch(error) {

    }
}