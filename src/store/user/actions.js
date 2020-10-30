export const authAction = (user) => async dispatch => {
    localStorage.setItem('user', JSON.stringify(user))
    dispatch ({
        type: 'AUTH',
        payload: user
    })
}