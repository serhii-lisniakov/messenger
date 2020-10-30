export const newMessageAction = (newMessage) => ({
    type: 'NEW_MESSAGE',
    payload: newMessage
})

export const chuckNorrisAnswerAction = (contactId) => async dispatch => {
    const answer = await fetch('https://api.chucknorris.io/jokes/random')
                        .then(res => res.json())
                        .catch(err => alert(err))
    dispatch({
        type: 'GET_ANSWER',
        payload: {
            contactId,
            answer: {
                own: false,
                message: answer.value,
                date: new Date().toString()
            }
        }
    })
}