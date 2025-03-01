import {configureStore} from "@reduxjs/toolkit";
import user from '../features/user/userSlice.ts'
import stats from '../features/stats/statsSlice.ts'

export const store = configureStore({
    reducer: {
        stats, user
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;