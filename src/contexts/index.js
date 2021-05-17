import React from 'react'
import PropTypes from 'prop-types'

import AuthContextProvider, { useAuth } from './AuthContext'
import ModalContextProvider, { useModal, ModalRoot } from './ModalContext'

const AppContext = React.createContext({})

const AppProvider = ({ value, children }) => {
  return (
    <AppContext.Provider value={value}>
      <AuthContextProvider>
        <ModalContextProvider>
          {children}
          <ModalRoot />
        </ModalContextProvider>
      </AuthContextProvider>
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object,
}

AppProvider.defaultProps = {
  value: {},
}

export { useModal, useAuth }

export default AppProvider
