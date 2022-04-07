import { combineReducers } from "redux";
import authReducers from "@/store/reducers/authReducers";

const reducers = combineReducers({
    auth: authReducers
});

export default reducers;