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
            url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
            data: images,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiDeletePostAdmin = (id) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: `/api/v1/post/admin`,
                params: { id }
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}
export const apiUpdatePostAdmin = (data) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: `/api/v1/post/admin`,
                data
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}
export const apiGetPostAd = (query) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/post/admin`,
                params: query
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

export const apiCreatePost = (payload) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: `http://localhost:5000/api/v1/post/create-new`,
                data: payload
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

export const apiGetPostsLimitAdmin = (query) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `http://localhost:5000/api/v1/post/limit-admin`,
                params: query
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

export const apiUpdatePost = (payload) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: `http://localhost:5000/api/v1/post/update`,
                data: payload
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

export const apiDeletePost = (postId) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: `http://localhost:5000/api/v1/post/delete`,
                params: { postId }
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}


export const apiCreatePostLike = (postId) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: `http://localhost:5000/api/v1/post/post-like`,
                params: { postId }
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}
export const apiDeletePostLike = (postId) => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: `http://localhost:5000/api/v1/post/delete-like`,
                params: { postId }
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

export const apiGetPostLike = () => {
    // console.log(query);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/post/get-like`,
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}
