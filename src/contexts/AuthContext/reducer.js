const reducer = (prevState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...prevState,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'SIGN_OUT':
      return {
        ...prevState,
        isAuthenticated: false,
      }
    default:
      return prevState
  }
}

export default reducer
