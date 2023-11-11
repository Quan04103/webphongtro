import axiosConfig from '../axiosConfig'


export const apiLoginAdmin = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/admin/loginadmin',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

