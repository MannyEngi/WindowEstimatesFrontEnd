import styled from '@emotion/styled'
import AntdCascader from 'antd/lib/cascader'

const Cascader = styled(AntdCascader)`
  && {
    border-radius: 5px;
    .ant-input {
      border: 0.8px solid;
      border-radius: inherit;
      border-color: ${({ theme }) => theme.colors['silver']};
    }
    &:focus .ant-cascader-input {
      border-color: ${({ theme }) => theme.colors['primary']};
    }
    &.ant-cascader-picker-focused {
      .ant-input {
        box-shadow: 0 0 0 3px rgba(17, 146, 141, 0.1);
        border-color: ${({ theme }) => theme.colors['primary']};
      }
    }
    .ant-cascader-picker-label:hover
      + .ant-cascader-input:not(.ant-cascader-picker-disabled
        .ant-cascader-picker-label:hover
        + .ant-cascader-input) {
      border-color: ${({ theme }) => theme.colors['primary']};
    }
  }
`

Cascader.defaultProps = {
  size: 'large',
}

export default Cascader
