import React from 'react'
import numeral from 'numeral'
import { Row, Col } from 'antd'

import { Box, Button, FlexBox, Image, Typography } from '.'

const OrderItem = ({ name, logo, jobName, zipCode, items, view, price, manufacturer }) => {
  return (
    <Box border="1px" padding="15px" borderRadius="sm" borderColor="primary" marginBottom="24px">
      {view && (
        <FlexBox
          color="#fff"
          padding="5px 10px"
          borderTopLeftRadius="sm"
          borderTopRightRadius="sm"
          margin="-15px -15px 15px"
          backgroundColor="primary"
        >
          <Box>Job Name: {jobName}</Box>
          <Box marginLeft="10px">ZipCode: {zipCode}</Box>
        </FlexBox>
      )}
      <Row gutter={[24, 24]}>
        <Col lg={6} md={24}>
          <FlexBox height="120px" alignItems="center">
            <Image width="100%" height="auto" src={logo} />
          </FlexBox>
        </Col>
        <Col lg={10} md={12}>
          <Typography
            as="h4"
            color="black"
            marginBottom="0"
            fontWeight="medium"
            lineHeight="shorter"
            textTransform="capitalize"
          >
            {manufacturer}: {name}
          </Typography>
          <Typography color="black">Number of items: {items}</Typography>
        </Col>
        <Col lg={8} md={12}>
          <Box textAlign="right">
            <Typography as="h3" color="black">
              {numeral(price).format('$0,0.00')}
            </Typography>
            <Button variant="primary" size="large">
              View Details
            </Button>
          </Box>
        </Col>
      </Row>
    </Box>
  )
}

export default OrderItem
