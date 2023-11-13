import actionTypes from "../actions/actionTypes";

const initState = {
    isAdminIn: false,
    msg: '',
    update: false
}

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                isAdminIn: true,
                msg: ''
            }
        case actionTypes.LOGIN_ADMIN_FAIL:
            return {
                ...state,
                isAdminIn: false,
                msg: action.data,
                update: !state.update
            }
        case actionTypes.LOGOUT_ADMIN:
            return {
                ...state,
                isAdminIn: false,
                token: null,
                msg: ''
            }

        default:
            return state;
    }
}

export default adminReducer