export const LOGIN_USER = 'user:loginUser';

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: {
            user: user
        }
    }
}