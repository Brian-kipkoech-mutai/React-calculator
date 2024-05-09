import { combineReducers } from "redux";
import inputReducer from "./inputReducer";


const rootReducer=combineReducers(
    {
    inputReducer:inputReducer

    }
)

export default rootReducer;