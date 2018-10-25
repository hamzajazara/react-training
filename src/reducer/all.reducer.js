import { combineReducers } from 'redux';
import { loginReducer } from './login.reducer'

export const allReducers = combineReducers({
    login: loginReducer
});