export const LOGIN_USER = 'user:loginUser';

export default loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: {
            user: user
        }
    }
}