import {StatsType, UserType} from "../utils/types";

export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_FOLLOWERS = 'CHANGE_FOLLOWERS';
export const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING';

export const changeAvatar = (user: UserType) => ({
    type: CHANGE_AVATAR,
    payload: user
});

export const changeName = (user: UserType) => ({
    type: CHANGE_NAME,
    payload: user
});


export const changeFollowers = (stats: StatsType) => ({
    type: CHANGE_FOLLOWERS,
    payload: stats
})

export const changeFollowing = (stats: StatsType) => ({
    type: CHANGE_FOLLOWING,
    payload: stats
})