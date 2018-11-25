import axios from 'axios'

const startAction = () => {
    // document.getElementById('waiting').classList.toggle('is-invisible')

    return {
        type: 'PERFORMING_ACTION',
        isPerformingAction: true
    }
}

const stopAction = () => {
    // document.getElementById('waiting').classList.toggle('is-invisible')

    return {
        type: 'PERFORMING_ACTION',
        isPerformingAction: false
    }
}

// GET ALL TRANSACTIONS
const getAllTransactions = (transactions) => {
    return {
        type: 'GET_ALL_TRANSACTIONS',
        transactions
    }
}

export const startGetAllTransactions = () => {
    return async (dispatch) => {
        try {
            dispatch(startAction())

            const headers = {
                'x-auth': localStorage.getItem('x-auth')
            }

            let result = await axios.get('/api/transactions', { headers }) || []

            if (!result.data) {
                throw new Error('Error in GET /api/transactions')
            }

            dispatch(getAllTransactions(result.data))
        } catch (e) {
            console.log(e)
            dispatch(getAllTransactions([]))
        } finally {
            dispatch(stopAction())
        }
    }
}

// ADD TRANSACTION
const addTransaction = (transaction) => {
    return {
        type: 'ADD_TRANSACTION',
        transaction
    }
}

export const startAddTransaction = (transaction) => {
    return async (dispatch) => {
        try {
            dispatch(startAction())

            const headers = {
                'x-auth': localStorage.getItem('x-auth')
            }

            let result = await axios.post('/api/transactions', transaction, { headers })

            if (!result.data) {
                throw new Error('Error in POST /api/transactions')
            }

            dispatch(addTransaction(result.data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(stopAction())
        }
    }
}

// DELETE TRANSACTION
const deleteTransaction = (_id) => {
    return {
        type: 'DELETE_TRANSACTION',
        _id
    }
}

export const startDeleteTransaction = (_id) => {
    return async (dispatch) => {
        try {
            dispatch(startAction())

            const headers = {
                'x-auth': localStorage.getItem('x-auth')
            }

            let result = await axios.delete(`/api/transactions/${_id}`, { headers })

            if (!result.data) {
                throw new Error('Error in DELETE /api/transactions')
            }

            dispatch(deleteTransaction(_id))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(stopAction())
        }
    }
}
