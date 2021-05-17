import React from 'react'
import PropTypes from 'prop-types'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

import { Box, FlexBox, Image, Button, Typography, HeroWithBackground } from '.'

const AnotherManufacturer = ({
  title,
  onYesButtonClick,
  onNoButtonClick,
  choosedManufacturers,
}) => {
  return (
    <HeroWithBackground>
      <Box
        maxWidth="470px"
        borderRadius="xs"
        padding={{ xs: '50px 30px', md: '50px' }}
        backgroundColor="rgba(255, 255, 255, 0.7)"
      >
        <FlexBox>
          {choosedManufacturers.map(({ logo, name }) => (
            <Image
              key={name}
              width="150px"
              display="block"
              margin="0 auto 20px"
              src={logo}
              alt={name}
            />
          ))}
        </FlexBox>
        <Typography
          as="h3"
          color="black"
          marginBottom="0"
          fontWeight="bold"
          textAlign="center"
          lineHeight="shorter"
        >
          {title}
        </Typography>
        <Box textAlign="center" marginTop="24px">
          <Button
            size="large"
            shape="round"
            variant="secondary"
            onClick={onYesButtonClick}
            style={{ marginRight: '15px' }}
          >
            <ArrowLeftOutlined /> Yes
          </Button>
          <Button shape="round" size="large" variant="primary" onClick={onNoButtonClick}>
            No <ArrowRightOutlined />
          </Button>
        </Box>
      </Box>
    </HeroWithBackground>
  )
}

AnotherManufacturer.propTypes = {
  title: PropTypes.string,
  onYesButtonClick: PropTypes.func,
  onNoButtonClick: PropTypes.func,
}

export default AnotherManufacturer
