import {UserType} from "../../utils/types";
import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    } as UserType,
    reducers: {
        changeAvatar: (_state, action) => {
            _state.avatar = action.payload || _state.avatar;
        },
        changeName: (_state, action) => {
            _state.name = action.payload || _state.name;
        }
    }
})

export const {changeAvatar, changeName} = userSlice.actions;
export default userSlice.reducer;