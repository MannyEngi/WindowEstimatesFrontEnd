import React from 'react'
import { Form } from 'antd'
import PropTypes from 'prop-types'

import { Input, Modal, Button, Image, Box, FlexBox, PseudoBox } from '.'

const ForgotPassword = ({ visible, onCancel, onSendEmailClick, onBacktoSignInClick }) => {
  return (
    <Modal width="468px" visible={visible} onCancel={onCancel}>
      <Image width="180px" display="block" margin="0 auto 30px" src="./images/logo-2.png" alt="" />
      <Form onFinish={onSendEmailClick}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email.' },
            { type: 'email', message: 'You entered invalid email.' },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
        <Button htmlType="submit" size="large" block>
          Send Email
        </Button>
        <FlexBox justifyContent="center" marginTop="10px">
          <Box marginRight="5px">Back to</Box>
          <PseudoBox
            as="a"
            color="primary"
            onClick={onBacktoSignInClick}
            _hover={{
              color: 'primary',
            }}
          >
            Sign In
          </PseudoBox>
        </FlexBox>
      </Form>
    </Modal>
  )
}

ForgotPassword.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSendEmailClick: PropTypes.func.isRequired,
  onBacktoSignInClick: PropTypes.func.isRequired,
}

export default ForgotPassword
