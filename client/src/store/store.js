import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import { transactionsReducer } from './../reducers/transactions-reducer'
import { userReducer } from './../reducers/user-reducer'

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        transactions: transactionsReducer,
        user: userReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}
