const defaultState = {
  data: [],
  isPerformingAction: false
}

export const transactionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PERFORMING_ACTION':
      return {
        ...state,
        isPerformingAction: action.isPerformingAction
      }
    case 'GET_ALL_TRANSACTIONS':
      return {
        ...state,
        data: action.transactions
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        data: [
          ...state.data,
          action.transaction
        ]
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        data: state.data.filter(transaction => transaction.id !== action.id)
      }
    case 'CLEAR':
      return defaultState
    default:
      return state
  }
}
