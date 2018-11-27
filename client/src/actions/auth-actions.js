import axios from 'axios'

const startAuthAction = () => {
    return {
        type: 'PERFORMING_ACTION',
        isPerformingAction: true
    }
}

const endAuthAction = () => {
    return {
        type: 'PERFORMING_ACTION',
        isPerformingAction: false
    }
}

// login
const login = () => {
    return {
        type: 'LOGIN'
    }
}

export const startLogin = (password) => {
    return async (dispatch) => {
        let result = []
        try {
            dispatch(startAuthAction())
            result = await axios.post('/api/auth/login', { password })

            if (!result) {
                throw new Error('Error in GET /api/auth/login result')
            }

            if (typeof (Storage) !== 'undefined') {
                localStorage.setItem('x-auth', result.headers['x-auth'])
                dispatch(login())
            } else {
                // console.log('Sorry! No web Storage support..')
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(endAuthAction())
        }
    }
}

// logout
const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const startLogout = () => {
    return (dispatch) => {
        const headers = {
            'x-auth': localStorage.getItem('x-auth')
        }

        return axios.delete('/api/auth/me/token', { headers }).then(() => {
            localStorage.removeItem('x-auth')
            dispatch(logout())
        }).catch(() => {
            // console.log('error: unable to logout')
        })
    }
}

export const checkIfLoggedIn = () => {
    return (dispatch) => {
        const headers = {
            'x-auth': localStorage.getItem('x-auth')
        }

        return axios.get('/api/auth/me', { headers }).then(() => {
            dispatch(login())
        }).catch(() => {
            // console.log('not logged in already')
        })
    }
}