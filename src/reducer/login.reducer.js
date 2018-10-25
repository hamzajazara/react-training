import { LOGIN_USER } from '../action/login.actions';

export function loginReducer(state = { user: {}, isLoading: false }, { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            return payload;
        default:
            return state;
    }
}