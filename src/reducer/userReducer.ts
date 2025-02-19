import {UserType} from "../utils/types";
import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/twitActions.ts";


const initialState: UserType = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
}

export const userReducer = (state = initialState, action: { type: string, payload?: string }) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar};
        case CHANGE_NAME:
            return {...state, name: action.payload || state.name};
        default:
            return state;

    }
}