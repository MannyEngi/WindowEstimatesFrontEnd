import { Checkbox as AntdCheckbox } from 'antd'
import styled from '@emotion/styled'

const Checkbox = styled(AntdCheckbox)`
  && {
    .ant-checkbox-inner {
      width: 17px;
      height: 17px;
      border-radius: 5px;
      background-color: #fff;
      border-color: ${({ theme }) => theme.colors['primary']};
    }
    .ant-checkbox-checked {
      &::after {
        border: none;
      }
      .ant-checkbox-inner::after {
        border-color: ${({ theme }) => theme.colors['primary']};
      }
    }
  }
`

export default Checkbox
