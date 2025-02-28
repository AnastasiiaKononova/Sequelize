const {User, Group} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const user = await User.create(body);
        res.status(201).send({data:user});
    } catch(error) {
        res.status(400).send(error);
    }
}

module.exports.getUserWithGroups = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userWithGroups = await User.findAll({
            where: {
                id: Number(userId)
            },
            include: [{
                model: Group
            }]
        
        });
        res.status(200).send({data: userWithGroups})
    } catch(error) {
        next(error);
    }
}




module.exports.getAll = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).send({data:users});
    } catch (error) {

    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        // дописати контроллер на отримання 1 юзера за його PrimaryKey
        const user = await User.findByPk(userId);
        res.status(200).send({data:user});
    } catch(error) {

    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const updated = await User.update(body, {
            where: {
                id: Number(userId)
            }
        });
        res.status(200).send({data: updated})
    } catch(error) {

    }
}

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