import { UserActionTypes } from './user-types';
const INITIAL_STATE = {
    currentUserToken: null,
    currentUserName: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER_TOKEN:
            return {
                ...state,
                currentUserToken: action.payload
            }
        case UserActionTypes.SET_CURRENT_USER_NAME:
            return {
                ...state,
                currentUserName: action.payload
            }
        default:
            return state
    }
}

export default userReducer;