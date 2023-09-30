const initState = {
    isLoggedIn: false,
    token: null //Để lưu js web token
}

const authReducer = (state = initState, action) => {
    switch (action.type){

        default:
            return state;
    }
}

export default authReducer