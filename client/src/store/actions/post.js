import actionTypes from './actionTypes'
import { apiGetNewPosts, apiGetOnePost, apiGetPosts, apiGetPostsLimit, apiGetPostsPage } from '../../services/post'

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()
        console.log(response)
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