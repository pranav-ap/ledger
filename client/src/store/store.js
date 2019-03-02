import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

import {transactionsReducer} from './../reducers/transactions-reducer'

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        transactions: transactionsReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
      reducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    )
}
