import db from '../models'
import bcrypt from 'bcryptjs'
require('dotenv').config()
import jwt from 'jsonwebtoken'


export const getAdminService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Admin.findAll({
            raw: true,
            nest: true,
            attributes: {
                
            }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting admin is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})

export const loginServiceAdmin = ({ username, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Admin.findOne({
            where: { username },
            raw: true
        })
        
        const isCorrectPassword = response && (password === response.password)
        
        resolve({
            err: isCorrectPassword ? 0 : 2,
            msg: isCorrectPassword ? 'Success' : 'Sai mật khẩu rồi !!!'
        })
    } catch (error) {
        reject(error)
    }
})