const {User} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const user = await User.create(body);
        res.status(201).send(user);
    } catch(error) {
        res.status(400).send(error);
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (error) {

    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        // дописати контроллер на отримання 1 юзера за його PrimaryKey
        const user = await User.findByPk(userId);
        res.status(200).send(user);
    } catch(error) {

    }
}

module.exports.updateOne = async (req, res, next) => {}

// module.exports.deleteOne = async (req, res, next) => {
//     try { 
//         const {params: {userId}} = req;
//         const deleted = await User.destroy({
//             where: {
//                 id: Number(userId)
//             }
//         }); // по дефолту повернув кількість рядків, які він видалив = 1
//         res.status(200).send({data: deleted}) //res.send(1) розцінюється як сигнал для ноди
//     } catch(error) {

//     }
// }


module.exports.deleteOne = async (req, res, next) => {
        try { 
            const {params: {userId}} = req;
           const foundUser = await User.findByPk(userId);
           // на цьому етапі можна виконати додаткові перевірки: чи має право юзер видалити цього юзера
           // або чи існує такий юзер в БД
           if (foundUser) {
            const deleted = await foundUser.destroy();
            res.status(200).send({data: deleted});
           }
        } catch(error) {
    
        }
    }