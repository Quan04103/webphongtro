import actionTypes from './actionTypes'
import * as apis from '../../services'


export const getCurrent = () => async (dispatch) => {
    try {
        const response = await apis.apiGetCurrent()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT,
                currentData: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_CURRENT,
                msg: response.data.msg,
                currentData: null
            })
            dispatch({ type: actionTypes.LOGOUT})
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT,
            currentData: null,
            msg: error,
        })
        dispatch({ type: actionTypes.LOGOUT})
    }
}

export const getOneUser = () => async (dispatch) => {
    try {
        const response = await apis.apiGetOneUser()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ONE_USER,
                currentData: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_ONE_USER,
                msg: response.data.msg,
                currentData: null
            })
            dispatch({ type: actionTypes.LOGOUT})
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ONE_USER,
            currentData: null,
            msg: error,
        })
        dispatch({ type: actionTypes.LOGOUT})
    }
}


export const getUser = () => async (dispatch) => {
    try {
        const response = await apis.apiGetUser()
        console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_USER,
                users: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_USER,
                msg: response.data.msg
            })
        }
        

    } catch (error) {
        dispatch({
            type: actionTypes.GET_USER,
            users: null,
            msg: error,
        })
    }
}