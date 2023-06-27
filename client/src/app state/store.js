import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './tranSlice'

export default configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
})

