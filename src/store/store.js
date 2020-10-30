import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from "redux";
import { contactsReducer } from './contacts/reducer';
import { userReducer } from './user/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    user: userReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)