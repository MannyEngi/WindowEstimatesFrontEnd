import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import AntdModal from 'antd/lib/modal'

const Modal = styled(AntdModal)`
  && {
    top: 20px;
    .ant-modal-header {
      border-radius: 10px 10px 0 0;
    }
    .ant-modal-content {
      overflow: hidden;
      border-radius: 10px;
    }
  }
`

Modal.propTypes = {
  footer: PropTypes.node,
  visible: PropTypes.bool,
  width: PropTypes.string,
  centered: PropTypes.bool,
}

Modal.defaultProps = {
  footer: null,
  centered: true,
  destroyOnClose: true,
}

export default Modal
