import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import { transactionsReducer } from './../reducers/transactions-reducer'
import { authReducer } from './../reducers/auth-reducer'

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        transactions: transactionsReducer,
        auth: authReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}
