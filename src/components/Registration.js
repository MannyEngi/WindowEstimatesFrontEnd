import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col } from 'antd'

import { Input, Modal, Button, Image, Box, FlexBox, PseudoBox } from '.'

const Registration = ({ visible, onCancel, onSignInClick, onRegisterClick }) => {
  return (
    <Modal width="468px" visible={visible} onCancel={onCancel}>
      <Image width="180px" display="block" margin="0 auto 30px" src="./images/logo-2.png" alt="" />
      <Form onFinish={onRegisterClick} initialValues={{ remember: true }}>
        <Row gutter={24}>
          <Col sm={12} xs={24}>
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: 'Please enter your first name.' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col sm={12} xs={24}>
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: 'Please enter your last name.' }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>
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
        <Button htmlType="submit" size="large" block>
          Register
        </Button>
        <FlexBox justifyContent="center" marginTop="10px">
          <Box marginRight="5px">Already have an account?</Box>
          <PseudoBox
            as="a"
            color="primary"
            onClick={onSignInClick}
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

Registration.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
}

export default Registration
