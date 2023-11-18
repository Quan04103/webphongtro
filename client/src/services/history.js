import axiosConfig from '../axiosConfig'


export const apiCreateHistoryTransaction = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/history/create-history',
            data: payload
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetHistoryUser = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/history/gethistory',
            data:{id}
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetHistoryUserAll = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/history/gethistoryall',
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetHistoryUserByDate = (created) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/history/gethistorybydate',
            params: { created }
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})