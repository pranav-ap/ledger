const defaultState = {
    loggedIn: false,
    isPerformingAction: false
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'PERFORMING_ACTION':
            return {
                ...state,
                isPerformingAction: action.isPerformingAction
            }
        case 'LOGIN':
            return {
                ...state,
                loggedIn: true
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false
            }
        case 'CLEAR':
            return defaultState
        default:
            return state
    }
}
