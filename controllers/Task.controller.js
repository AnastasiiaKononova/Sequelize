const { Task, User } = require("../models");
const NotFoundError = require("../errors/NotFoundError");

module.exports.createTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
    const task = await Task.create({ ...body, userId });
    res.status(201).send({ data: task });
  } catch (error) {
    next(error); // прокидування помилки у обробник
  }
};

module.exports.getTask = async (req, res, next) => {
  // отримання конкретної таски
  // /users/:userId/tasks/:taskId
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUserTasks = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findByPk(Number(userId));
    if (user) {
      const allUserTasks = await user.getTasks();
      res.status(200).send({ data: allUserTasks });
    } else {
      throw new NotFoundError("User not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateTask = async (req, res, next) => {
    try {
        const {body, params: {taskId}} = req;
        // перевірити, чи той юзер, який надіслав запит, є власником таски
        const [rowCount, updatedTask] = await Task.update({...body}, {
            where: {
                id: Number(taskId)
            },
            returning: true
        });
        res.status(200).send({data: updatedTask});
    }catch(error){
        next(error)
    }
};

module.exports.deleteTask = async (req, res, next) => {
    // видалення конкретної таски
    try {
        const {params: {taskId}} = req;
        // перевірити, чи той юзер, який надіслав запит, є власником таски
        const deleted = await Task.destroy({
            where: {
                id: Number(taskId)
            },
            returning: true
        });
        res.status(200).send({data: deleted});
    }catch(error){
        next(error)
    }
}

module.exports.countUserTasks = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    // зробити за допомггою магічного методу
    // user.countTasks()
    const user = await User.findByPk(Number(userId));
    const countTasks = await user.countTasks();
    res.status(200).send({ data: countTasks });
  } catch (error) {}
};
