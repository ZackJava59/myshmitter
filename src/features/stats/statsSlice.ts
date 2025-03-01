import {createSlice} from "@reduxjs/toolkit";
import {StatsType} from "../../utils/types";

export const statsSlice = createSlice({
    name: "stats",
    initialState: {
        followers: 0,
        following: 0
    } as StatsType,
    reducers: {
        changeFollowers: (_state, action) => {
            if (action.payload !== undefined) {
                _state.followers = action.payload
            }

        },
        changeFollowing: (_state, action) => {
            if (action.payload !== undefined) {
                _state.following = action.payload
            }
        }
    }
})

export const {changeFollowers, changeFollowing} = statsSlice.actions;
export default statsSlice.reducer;