import React, { useState } from 'react'
import PropTypes from 'prop-types'

const initialState = {
  props: {},
  component: null,
  showModal: () => {},
  hideModal: () => {},
}

const ModalContext = React.createContext(initialState)

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(initialState)

  const showModal = (component, props = {}) => {
    setModal({ component, props })
  }

  const hideModal = ({ ...rest }) => {
    setModal((prevState) => ({ ...prevState, props: {}, ...rest }))
  }

  return (
    <ModalContext.Provider value={{ ...modal, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const ModalRoot = () => (
  <ModalContext.Consumer>
    {({ component: Component, props, hideModal }) =>
      Component ? <Component onClose={hideModal} {...props} /> : null
    }
  </ModalContext.Consumer>
)

function useModal() {
  const context = React.useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be use inside ModalContext')
  }
  return context
}

ModalContextProvider.propTypes = {
  children: PropTypes.node,
}

export { useModal }

export default ModalContextProvider
