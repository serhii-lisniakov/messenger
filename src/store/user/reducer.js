const initialStore = JSON.parse(localStorage.getItem('user')) || {
    signed: false,
    name: ''
}

export const userReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'AUTH':
            return action.payload
        default: return state
    }
}