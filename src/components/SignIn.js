import React from 'react'
import { Form } from 'antd'
import PropTypes from 'prop-types'

import { Input, Modal, Button, Checkbox, Image, Box, FlexBox, PseudoBox } from '.'

const SignIn = ({
  visible,
  onCancel,
  onSignInClick,
  onCreateAccountClick,
  onForgotPasswordClick,
}) => {
  return (
    <Modal width="468px" visible={visible} onCancel={onCancel}>
      <Image width="180px" display="block" margin="0 auto 30px" src="./images/logo-2.png" alt="" />
      <Form onFinish={onSignInClick} initialValues={{ remember: true }}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email.' },
            { type: 'email', message: 'You entered invalid email.' },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password.' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <FlexBox marginBottom="24px" alignItems="center" justifyContent="space-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <PseudoBox
            as="a"
            color="primary"
            onClick={onForgotPasswordClick}
            _hover={{
              color: 'primary',
            }}
          >
            Forgot password
          </PseudoBox>
        </FlexBox>
        <Button htmlType="submit" size="large" block>
          Sign In
        </Button>
        <FlexBox justifyContent="center" marginTop="10px">
          <Box marginRight="5px">Don't have an account?</Box>
          <PseudoBox
            as="a"
            color="primary"
            onClick={onCreateAccountClick}
            _hover={{
              color: 'primary',
            }}
          >
            Create account
          </PseudoBox>
        </FlexBox>
      </Form>
    </Modal>
  )
}

SignIn.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  onCreateAccountClick: PropTypes.func.isRequired,
  onForgotPasswordClick: PropTypes.func.isRequired,
}

export default SignIn
