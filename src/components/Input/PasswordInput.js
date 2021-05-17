/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import AntdPassword from 'antd/lib/input/Password'

import Input from './index'

const PasswordInput = React.forwardRef((props, ref) => {
  return (
    <Input
      as={AntdPassword}
      css={css`
        input::placeholder {
          color: rgba(51, 61, 71, 0.8);
        }
      `}
      ref={ref}
      {...props}
    />
  )
})

export default PasswordInput
