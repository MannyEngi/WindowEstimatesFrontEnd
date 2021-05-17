import React from 'react'
import AntdInput from 'antd/lib/input'

import TextArea from './TextArea'
import PseudoBox from '../PseudoBox'
import PasswordInput from './PasswordInput'

import useInputStyle from './styles'

const Input = React.forwardRef((props, ref) => {
  const inputStyleProps = useInputStyle(props)

  return <PseudoBox as={AntdInput} {...inputStyleProps} ref={ref} {...props} />
})

Input.TextArea = TextArea
Input.Password = PasswordInput

Input.propTypes = {}

Input.defaultProps = {}

export default Input
