const {Task, User} = require('../models');
const NotFoundError = require('../errors/NotFoundError');

module.exports.createTask = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const task = await Task.create({...body, userId});
        res.status(201).send({data: task})
    } catch (error) {
        next(error); // прокидування помилки у обробник
    }
}

module.exports.getTask = () => {
// отримання конкретної таски
// /users/:userId/tasks/:taskId
}

module.exports.getAllUserTasks = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findByPk(Number(userId));
        if (user) { 
            const allUserTasks = await user.getTasks();
            res.status(200).send({data: allUserTasks})
        } else {
            throw new NotFoundError('User not found');
        }
    } catch(error) {
        next(error)
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