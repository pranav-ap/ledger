import axios from 'axios'

const startAction = () => {
  return {
    type: 'PERFORMING_ACTION',
    isPerformingAction: true
  }
}

const stopAction = () => {
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

      let result = await axios.get('/api/transactions')

      if (!result.data) {
        throw new Error('Error in GET /api/transactions')
      }

      dispatch(getAllTransactions(result.data))
    } catch (e) {
      console.log(e)
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

      let result = await axios.post('/api/transactions', transaction)

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
const deleteTransaction = (id) => {
  return {
    type: 'DELETE_TRANSACTION',
    id
  }
}

export const startDeleteTransaction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startAction())

      let result = await axios.delete(`/api/transactions/${id}`)

      if (!result.data) {
        throw new Error('Error in DELETE /api/transactions')
      }

      dispatch(deleteTransaction(id))
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(stopAction())
    }
  }
}

// UPDATE TRANSACTION
const updateTransaction = (id, updatedData) => {
  return {
    type: 'UPDATE_TRANSACTION',
    id,
    updatedData
  }
}

export const startUpdateTransaction = (id, updatedData) => {
  return async (dispatch) => {
    try {
      dispatch(startAction())

      let result = await axios.patch(`/api/transactions/${id}`, { ...updatedData })

      if (!result.data) {
        throw new Error('Error in PATCH /api/transactions')
      }

      dispatch(updateTransaction(id, result.data))
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(stopAction())
    }
  }
}
