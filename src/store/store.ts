import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {statsReducer} from "../reducer/statsReducer.ts";
import {userReducer} from "../reducer/userReducer.ts";

const rootReducer = combineReducers({stats: statsReducer, user: userReducer});

export const store: Store = createStore(rootReducer)