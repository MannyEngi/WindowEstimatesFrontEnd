import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Button as AntdButton } from 'antd'
import { variant, buttonStyle, borderRadius, fontSize, space } from 'styled-system'

const Button = styled((props) => <AntdButton {...props} />)(
  {
    border: 0,
    outline: 0,
    appearance: 'button',
    fontFamily: 'inherit',
  },
  space,
  fontSize,
  buttonStyle,
  borderRadius,
  variant({
    prop: 'size',
    key: 'buttonSizes',
  }),
  variant({
    scale: 'buttons',
  })
)

Button.defaultProps = {
  size: 'middle',
  variant: 'primary',
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'middle', 'large', 'xlarge']),
}

export default Button
