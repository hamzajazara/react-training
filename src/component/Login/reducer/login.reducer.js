import { LOGIN_USER } from '../action/login.actions';

export function loginReducer(state = {}, { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            return payload.user;
        default:
            return state;
    }
}