const useInputStyle = () => {
  return {
    height: '40px',
    fontSize: 'base',
    fontFamily: 'SofiaPro',
    borderRadius: '5px',
    transition: 'all 0.2s',
    border: '0.8px solid',
    borderColor: 'silver',
    _placeholder: {
      color: 'silver',
    },
    _hover: {
      borderColor: 'primary',
    },
    _focus: {
      outline: 'none',
      borderColor: 'primary',
      boxShadow: '0 0 0 3px rgba(17, 146, 141, 0.1)',
    },
  }
}

export default useInputStyle
