import actionTypes from "../actions/actionTypes";

const initState = {
    currentData: {},
    users: [],
    msg: ''
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT:
            return {
                ...state,
                currentData: action.currentData || {}
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                currentData: {}
            }
            case actionTypes.GET_USER:
                return {
                    ...state,
                    users: action.users || [],
                    msg: action.msg || '',
            }
            case actionTypes.GET_ONE_USER:
                return {
                    ...state,
                    currentData: action.currentData || {}
                }

        default:
            return state;
    }
}

export default userReducer
