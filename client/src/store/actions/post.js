import actionTypes from './actionTypes'
import { apiGetAccPosts, apiGetNewPosts, apiGetOnePost, apiGetPenPosts, apiGetPosts, apiGetPostsLimit, apiGetPostsPage,apiGetPostsLimitAdmin, apiUpdateStatus } from '../../services/post'

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg
            })
        }
        

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null
        })
    }
}

export const getPostsPage = (page) => async (dispatch) => {
    try {
        const response = await apiGetPostsPage(page)
        
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_PAGE,
                posts: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_PAGE,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_PAGE,
            posts: null
        })
    }
}

export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimit(query)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                posts: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            posts: null
        })
    }
}
export const getNewPosts = () => async (dispatch) => {
    try {
        const response = await apiGetNewPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_NEW_POST,
                newPosts: response.data.response,
            })
        } else {
            dispatch({
                type: actionTypes.GET_NEW_POST,
                msg: response.data.msg,
                newPosts: null
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_NEW_POST,
            newPosts: null
        })
    }
}


export const getPostsLimitAdmin = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimitAdmin(query)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                posts: response.data.response?.rows,
                count: response.data.response?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                msg: response.data.msg,
                posts: null
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_ADMIN,
            posts: null
        })
    }
}
export const editData = (dataEdit) => ({
    type: actionTypes.EDIT_DATA,
    dataEdit
})
export const resetDataEdit = () => ({
    type: actionTypes.RESET_DATAEDIT,
    
})

export const getOnePost = (id) => async (dispatch) => {
    try {
        const response = await apiGetOnePost(id)
        console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ONEPOST,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_ONEPOST,
                msg: response.data.msg
            })
        }
        

    } catch (error) {
        dispatch({
            type: actionTypes.GET_ONEPOST,
            posts: null
        })
    }
}

export const updateOnePost = (id,payload) => async (dispatch) => {
    try {
        const response = await apiGetOnePost(id, payload)
        console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.UPDATE_POST,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.UPDATE_POST,
                msg: response.data.msg
            })
        }
        

    } catch (error) {
        dispatch({
            type: actionTypes.UPDATE_POST,
            posts: null
        })
    }
}

export const getPenPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPenPosts()
        console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PENPOST,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_PENPOST,
                msg: response.data.msg
            })
        }
        

    } catch (error) {
        dispatch({
            type: actionTypes.GET_PENPOST,
            posts: null
        })
    }
}

export const updateStatusPost = (id,status) => async (dispatch) => {
    try {
        const response = await apiUpdateStatus(id, status)
        console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.UPDATE_STATUS_POST,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.UPDATE_STATUS_POST,
                msg: response.data.msg
            })
        }
        

    } catch (error) {
        dispatch({
            type: actionTypes.UPDATE_STATUS_POST,
            posts: null
        })
    }
}

export const getAccPost = () => async (dispatch) => {
    try {
        const response = await apiGetAccPosts()
        console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ACCPOST,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_ACCPOST,
                msg: response.data.msg
            })
        }
        

    } catch (error) {
        dispatch({
            type: actionTypes.GET_ACCPOST,
            posts: null
        })
    }
}
