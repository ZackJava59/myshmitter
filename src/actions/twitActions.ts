export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_FOLLOWERS = 'CHANGE_FOLLOWERS';
export const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING';

export const changeAvatar = (avatar:string) => ({
    type: CHANGE_AVATAR,
    payload: avatar
});

export const changeName = (name:string) => ({
    type: CHANGE_NAME,
    payload: name
});


export const changeFollowers = (followers: number) => ({
    type: CHANGE_FOLLOWERS,
    payload: followers
})

export const changeFollowing = (following: number) => ({
    type: CHANGE_FOLLOWING,
    payload: following
})