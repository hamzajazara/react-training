import { combineReducers } from 'redux';
import { loginReducer } from '../component/Login/reducer/login.reducer'

export const allReducers = combineReducers({
    login: loginReducer
});