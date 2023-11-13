import axiosConfig from '../axiosConfig'
import axios from 'axios'

export const apiGetPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/all',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetPostsPage = (page) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limitpage?page=${page}`,
           
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetPostsLimit = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limit`,
            params: query
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetNewPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/new-post`,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiUploadImages = (images) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
            data: images,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiCreatePost = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: `/api/v1/post/create-new`,
            data: payload,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
<<<<<<< HEAD
export const apiGetPostsLimitAdmin = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limit-admin`,
            params: query
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
=======

export const apiDeletePost = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: `/api/v1/post/deletepost/${id}`,
            data: id
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetOnePost = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/onepost?idpost=${id}`,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiUpdatePost = (id,payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: `/api/v1/post/updatepost?idpost=${id}`,
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetPenPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/allpen',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiUpdateStatus = (id,status) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: `/api/v1/post/updatestatuspost?idpost=${id}`,
            data: {status}
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetAccPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/allacc',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetCountAccPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/getcountaccpost',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetCountPenPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/getcountpenpost',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetCountRejPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/getcountrejpost',
>>>>>>> main
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})