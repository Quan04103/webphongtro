import db from '../models'
const { Op } = require("sequelize");

export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})
export const getPostsLimitService = (page, { limitPost, order, ...query }, { priceNumber, areaNumber }) => new Promise(async (resolve, reject) => {
    try {
        let offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const queries = { ...query }
        const limit = +limitPost || +process.env.LIMIT
        queries.limit = limit
        if (priceNumber) query.priceNumber = { [Op.between]: priceNumber }
        if (areaNumber) query.areaNumber = { [Op.between]: areaNumber }
        if (order) queries.order = [order]
        const response = await db.Post.findAndCountAll({
            where: query,
            raw: true,
            nest: true,
            offset: offset * limit,
            ...queries,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})

export const getNewPostService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            offset: 0,
            order: [['createdAt', 'DESC']],
            limit: +process.env.LIMIT,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
            ],
            attributes: ['id', 'title', 'star', 'createdAt']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})
// nhut quan
export const getPostsPageService = (offset) => new Promise(async (resolve, reject) => {
    try {

        const response = await db.Post.findAndCountAll({

            raw: true,
            nest: true,
            offset: offset * +process.env.LIMIT || 0,
            limit: +process.env.LIMIT,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})