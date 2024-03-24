import axios from '../axiosConfig'
export const apiGetCurrent = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/user/get-current',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiUpdateUser = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'put',
            url: '/api/v1/user/',
            data:payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetUser = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/user/getuser',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiDeleteUser = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'delete',
            url: `/api/v1/user/deleteuser/${id}`,
            data: id
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetOneUser = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: `/api/v1/post/getoneuser`,
            params: { id }
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiPlusMoney = (money) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'put',
            url: `/api/v1/user/plusmoney`,
            data: {money}
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})