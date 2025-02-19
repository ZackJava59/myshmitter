import {StatsType} from "../utils/types";
import {CHANGE_FOLLOWERS, CHANGE_FOLLOWING} from "../actions/twitActions.ts";

const initialState: StatsType = {
    followers: 0,
    following: 0,
}

export const statsReducer = (state = initialState, action: { type: string, payload?: number }) => {
    switch (action.type) {
        case CHANGE_FOLLOWERS:
            return {...state, followers: action.payload || state.followers};
        case CHANGE_FOLLOWING:
            return {...state, following: action.payload || state.following};
        default:
            return state;
    }
}