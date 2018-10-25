export const LOGIN_USER = 'user:loginUser';

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: {
            user: user,
            isLoading: true
        }
    }
}