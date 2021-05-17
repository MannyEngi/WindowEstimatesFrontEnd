import styled from '@emotion/styled'
import AntdSelect from 'antd/lib/select'

const Select = styled(AntdSelect)`
  && {
    .ant-select-selector {
      border-radius: 5px;
      border: 0.8px solid;
      border-color: ${({ theme }) => theme.colors['silver']};
      .ant-select-selection-item {
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors['black']};
      }
    }
    &.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
      border-color: ${({ theme }) => theme.colors['primary']};
    }
    &.ant-select-focused.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      box-shadow: 0 0 0 3px rgba(17, 146, 141, 0.1);
      border-color: ${({ theme }) => theme.colors['primary']};
    }
  }
`

Select.Option = AntdSelect.Option
Select.OptGroup = AntdSelect.OptGroup

Select.defaultProps = {
  size: 'large',
}

export default Select
