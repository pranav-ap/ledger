const defaultState = {
    startDate: '',
    name: '',
    isPerformingAction: false
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'PERFORMING_ACTION':
            return {
                ...state,
                isPerformingAction: action.isPerformingAction
            }
        case 'GET_USER':
            return {
                ...state,
                startDate: action.user.startDate,
                name: action.user.name
            }
        case 'CLEAR':
            return defaultState
        default:
            return state
    }
}
