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

// Authentication
const login = () => {
  return {
    type: 'LOGIN'
  }
}

export const startLogin = (password) => {
  return async (dispatch) => {
    try {
      dispatch(startAction())
      let result = await axios.post('/api/users/login', { password }) || []

      if (!result) {
        throw new Error('Error in GET /api/users/login')
      }

      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('x-auth', result.headers['x-auth'])
        dispatch(login())
      } else {
        console.log('Sorry! No web Storage support..')
      }
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(stopAction())
    }
  }
}

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

    return axios.delete('/api/users/me/token', { headers }).then(() => {
      localStorage.removeItem('x-auth')
      dispatch(logout())
    }).catch(() => {

    })
  }
}

export const checkIfLoggedIn = () => {
  return (dispatch) => {
    const headers = {
      'x-auth': localStorage.getItem('x-auth')
    }

    return axios.get('/api/users/me', { headers }).then(() => {
      dispatch(login())
    }).catch(() => {

    })
  }
}
