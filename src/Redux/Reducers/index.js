import { combineReducers } from "redux";
import utilReducer from './utilReducer';
import authReducer from './authReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    auth: authReducer,
    todo: todoReducer,
    util: utilReducer
})