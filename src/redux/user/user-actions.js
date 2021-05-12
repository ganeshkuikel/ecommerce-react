import { UserActionTypes } from './user-types';
export const setCurrentUserToken = userToken => ({
    type: UserActionTypes.SET_CURRENT_USER_TOKEN,
    payload: userToken
});

export const setCurrentUserName = userName => ({
    type: UserActionTypes.SET_CURRENT_USER_NAME,
    payload: userName
});
