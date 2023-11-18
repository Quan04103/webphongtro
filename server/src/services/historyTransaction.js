import db from '../models'
import { v4 as generateId } from 'uuid'
// GET ALL PRICE
export const createHistoryTransactionService = (body, user_id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.HistoryTransaction.create({
            id: generateId(),
            transaction_id : body.transaction_id,
            user_id,
            amount: body.amount,
            createdAt: body.created,
            updatedAt: body.updatedAt

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to create History Transaction.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getHistoryUser = (user_id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.HistoryTransaction.findAll({
            where: { user_id },
            raw: true,
            attributes: ['transaction_id','user_id' ,'amount', 'createdAt'],
        })
        resolve({
            err: response ? 0 : 1,
            logging: console.log,
            msg: response ? 'OK' : 'Failed to get History Transaction.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getHistoryAll = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.HistoryTransaction.findAll({
            raw: true,
            attributes: ['transaction_id','user_id' ,'amount', 'createdAt'],
        })
        resolve({
            err: response ? 0 : 1,
            logging: console.log,
            msg: response ? 'OK' : 'Failed to get History Transaction.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getHistoryByDate = (created) => new Promise(async (resolve, reject) => {
    try {
        
        const response = await db.HistoryTransaction.findAll({
            where: { createdAt : `${created}` },
            raw: true,
            attributes: ['transaction_id','user_id' ,'amount', 'createdAt'],
        })
        resolve({
            err: response ? 0 : 1,
            logging: console.log,
            msg: response ? 'OK' : 'Failed to get History Transaction.',
            response
        })
    } catch (error) {
        reject(error)
    }
})
