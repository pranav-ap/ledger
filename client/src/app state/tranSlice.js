import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const tranSlice = createSlice({
    name: 'transactions',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {
        clear: (state) => {
            state.transactions.data = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.data.push(action.payload)
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.data = state.data.filter(t => t.id !== action.payload.id)
            })
            .addCase(updateTransaction.fulfilled, (state, action) => {
                state.data = state.data.map(t => {
                    if (t.id === action.payload.id) {
                        return action.payload
                    }
                    return t
                })
            })
    },
})

// Action creators are generated for each case reducer function
export const { clear } = tranSlice.actions

export default tranSlice.reducer

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async (_) => {
    let response = await axios.get('/api/transactions')
    return response.data
})

export const addTransaction = createAsyncThunk('transactions/addTransaction', async (transaction) => {
    let response = await axios.post('/api/transactions', transaction)
    return response.data
})

export const deleteTransaction = createAsyncThunk('transactions/deleteTransaction', async (id) => {
    let response = await axios.delete(`/api/transactions/${id}`)
    return response.data
})

export const updateTransaction = createAsyncThunk('transactions/updateTransaction', async ({ id, updatedData }) => {
    let response = await axios.patch(`/api/transactions/${id}`, { ...updatedData })
    return response.data
})

