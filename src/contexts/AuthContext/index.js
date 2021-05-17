import React from 'react'
import PropTypes from 'prop-types'

import authReducer from './reducer'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {},
}

const AuthContext = React.createContext(initialState)

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState)

  const authActions = React.useMemo(
    () => ({
      signIn: (payload) => {
        dispatch({ type: 'SIGN_IN', payload })
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT' })
      },
    }),
    []
  )

  return (
    <AuthContext.Provider value={{ ...state, ...authActions }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be inside an AuthContextProvider')
  }
  return context
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
}

export default AuthContextProvider
