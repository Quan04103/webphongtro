import actionTypes from './actionTypes'
import { apiLoginAdmin } from '../../services/admin'

export const loginAdmin = (payload) => async (dispatch) => {
    try {
        const response = await apiLoginAdmin(payload)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN_ADMIN_SUCCESS,
                data: response.data.msg
            })
        } else {
            dispatch({
                type: actionTypes.LOGIN_ADMIN_FAIL,
                data: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_ADMIN_FAIL,
            data: null
        })
    }
}

export const logoutAdmin = () => ({
    type: actionTypes.LOGOUT
})