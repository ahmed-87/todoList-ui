import { combineReducers } from "redux";
import utilReducer from './utilReducer';
import authReducer from './authReducer';
import todoReducer from './todoReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    auth: authReducer,
    todo: todoReducer,
    util: utilReducer,
    form: formReducer
})