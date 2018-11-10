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

// GET USER
const getUser = (user) => {
    return {
        type: 'GET_USER',
        user
    }
}

export const startGetUser = () => {
    return async (dispatch) => {
        try {
            dispatch(startAction())
            let result = await axios.get('/api/users')

            if (!result.data) {
                throw new Error('Error in GET /api/users')
            }

            dispatch(getUser(result.data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(stopAction())
        }
    }
}
