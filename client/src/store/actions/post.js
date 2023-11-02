import actionTypes from './actionTypes'
import { apiGetPosts, apiGetPostsLimit, apiGetNewPosts, apiGetPostsLimitAdmin, apiGetPostLike } from '../../services/post'

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
export const getOutstandingPosts = () => async(dispatch) => {
    try {
        const response = await apiGetPostsLimit({
            limit: 5,
            order: ['star','DESC']
        })
        // console.log(response);

        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.GET_OUTSTANDING_POSTS,
                outstandingPosts: response.data.response.rows
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_OUTSTANDING_POSTS,
                msg: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_OUTSTANDING_POSTS,
            outstandingPosts: null,
        })
    }
}

export const getPostsLimitadmin = (query) => async(dispatch) => {
    try {
        const response = await apiGetPostsLimitAdmin(query)
        // console.log(response);

        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                postOfCurrent: response.data.response?.rows,
                count: response.data.response?.count,
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                msg: response.data.msg,
                postOfCurrent: null
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_ADMIN,
            postOfCurrent: null,
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


export const getPostLike = () => async(dispatch) => {
    try {
        const response = await apiGetPostLike()
        // console.log(response);

        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POST_LIKE,
                postLike: response.data.response
            })
        }
        else {
            dispatch({
                type: actionTypes.GET_POST_LIKE,
                postLike: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_POST_LIKE,
            postLike: null,
        })
    }
}
