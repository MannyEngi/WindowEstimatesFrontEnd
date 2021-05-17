import React from 'react'
import { Form, Space, Row, Col } from 'antd'
import { useTheme } from '@emotion/react'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'

import { Box, FlexBox, Input, Button, Select, Cascader } from '..'

const EstimationForm = ({
  glass,
  opening,
  windowMeasurements,
  onNextButtonClick,
  onBackButtonClick,
}) => {
  const { colors } = useTheme()

  return (
    <Form
      layout="vertical"
      onFinish={onNextButtonClick}
      initialValues={windowMeasurements}
      autoComplete="off"
    >
      <Row gutter={24} justify="center" style={{ marginBottom: '20px' }}>
        <Col lg={6} md={8} sm={10} xs={24}>
          <Form.Item
            name="jobName"
            label="Job Name"
            rules={[{ required: true, message: 'Please enter job name.' }]}
          >
            <Input placeholder="Job Name" />
          </Form.Item>
        </Col>
        <Col lg={6} md={8} sm={10} xs={24}>
          <Form.Item
            name="zipCode"
            label="Zip Code"
            rules={[{ required: true, message: 'Please enter zip code.' }]}
          >
            <Input placeholder="Zip Code" />
          </Form.Item>
        </Col>
      </Row>
      <Form.List name="measurements" initialValue={windowMeasurements}>
        {(fields, { add, remove }) => (
          <>
            <Space style={{ display: 'flex', marginBottom: '10px' }} align="baseline">
              <Box width="25px" fontWeight="bold" textAlign="center" marginRight="10px">
                Line
              </Box>
              <Box width="162px" fontWeight="bold" textAlign="center">
                Room
              </Box>
              <Box width="200px" fontWeight="bold" textAlign="center">
                Opening
              </Box>
              <Box width="120px" fontWeight="bold" textAlign="center">
                Width
              </Box>
              <Box width="120px" fontWeight="bold" textAlign="center">
                Height
              </Box>
              <Box width="170px" fontWeight="bold" textAlign="center">
                Glass
              </Box>
              <Box width="100px" fontWeight="bold" textAlign="center">
                Quantity
              </Box>
            </Space>
            {fields.map(({ key, name, fieldKey, ...restField }, index) => (
              <Space key={key} style={{ display: 'flex', marginBottom: '8px' }} align="baseline">
                <FlexBox
                  width="25px"
                  height="25px"
                  color="white"
                  marginRight="10px"
                  borderRadius="50%"
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor="primary"
                >
                  {index + 1}
                </FlexBox>
                <Form.Item
                  {...restField}
                  name={[name, 'room']}
                  style={{ width: '162px' }}
                  fieldKey={[fieldKey, 'room']}
                  rules={[{ required: true, message: 'Room is required.' }]}
                >
                  <Input placeholder="Room" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'opeing']}
                  style={{ width: '200px' }}
                  fieldKey={[fieldKey, 'opeing']}
                  rules={[{ required: true, message: 'Opening is required.' }]}
                >
                  <Cascader size="large" options={opening} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'width']}
                  style={{ width: '120px' }}
                  fieldKey={[fieldKey, 'width']}
                  rules={[{ required: true, message: 'Width is required.' }]}
                >
                  <Input placeholder="Width" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'height']}
                  style={{ width: '120px' }}
                  fieldKey={[fieldKey, 'height']}
                  rules={[{ required: true, message: 'Height is required.' }]}
                >
                  <Input placeholder="Height" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'glass']}
                  fieldKey={[fieldKey, 'glass']}
                  rules={[{ required: true, message: 'Glass is required.' }]}
                >
                  <Select style={{ width: '170px' }} placeholder="Glass">
                    {glass.map(({ label, value }) => (
                      <Select.Option key={value} value={value}>
                        {label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'quantity']}
                  fieldKey={[fieldKey, 'quantity']}
                  rules={[{ required: true, message: 'Qty is required.' }]}
                >
                  <Select style={{ width: '100px' }} placeholder="Qty">
                    {[...Array(20).keys()].map((item) => (
                      <Select.Option key={item} value={item + 1}>
                        {item + 1}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                {fields.length !== 1 && (
                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                    style={{ color: colors['error'], fontSize: '24px', verticalAlign: '-0.3em' }}
                  />
                )}
                {index === fields.length - 1 ? (
                  <PlusCircleOutlined
                    onClick={() => add({ quantity: 1 })}
                    style={{
                      color: colors['primary'],
                      fontSize: '24px',
                      verticalAlign: '-0.3em',
                    }}
                  />
                ) : (
                  <Box width="24px" />
                )}
              </Space>
            ))}
          </>
        )}
      </Form.List>
      <Box textAlign="center" marginTop="24px">
        <Button
          size="large"
          shape="round"
          variant="danger"
          onClick={onBackButtonClick}
          style={{ marginRight: '15px' }}
        >
          <ArrowLeftOutlined /> Back
        </Button>
        <Button htmlType="submit" shape="round" size="large" variant="primary">
          Next <ArrowRightOutlined />
        </Button>
      </Box>
    </Form>
  )
}

export default EstimationForm
