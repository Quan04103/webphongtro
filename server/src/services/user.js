import db from '../models'

// GET CURRENT
export const getOne = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get user.',
            response
        })
    } catch (error) {
        reject(error)
    }
})
export const updateUser = (payload, id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.update(payload, {
            where: { id }
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            msg: response[0] > 0 ? 'Updated' : 'Failed to update user.',

        })
    } catch (error) {
        reject(error)
    }
})

export const getUserService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findAll({
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get user.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const deleteUserService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.destroy({
            where: {
              id
            }
          });
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Delete user is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})

export const getOneUserService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            logging: console.log,
            msg: response ? 'OK' : 'Failed to get user.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const plusMoneyService = (id, money) => new Promise(async (resolve, reject) => {
    try {
        
        const response = await db.User.update(money ,{
            where: { id },
        })
        resolve({
            err: response ? 0 : 1,
            logging: console.log,
            msg: response ? 'OK' : 'Failed to update status post.',
            response
        })
    } catch (error) {
        reject(error)
    }
})


