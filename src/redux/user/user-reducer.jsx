const INITIAL_STATE = {
    currentUserToken: null,
    currentUserName: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER_TOKEN':
            return {
                ...state,
                currentUserToken: action.payload
            }
        case 'SET_CURRENT_USER_NAME':
            return {
                ...state,
                currentUserName: action.payload
            }
        default:
            return state
    }
}

export default userReducer;