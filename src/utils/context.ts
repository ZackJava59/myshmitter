import {createContext} from "react";
import {ContextTypes} from "./types";

export const TwitterContext = createContext<ContextTypes>({} as ContextTypes);