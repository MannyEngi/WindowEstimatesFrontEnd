import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'

import ColorBox from './ColorBox'
import { Box, Image, Button, FlexBox, Typography, HeroWithBackground } from '../'

const ChooseColors = ({
  title,
  data,
  onColorBoxClick,
  onNextButtonClick,
  onBackButtonClick,
  activeManufacturer,
}) => {
  return (
    <HeroWithBackground>
      <Box
        maxWidth="470px"
        borderRadius="xs"
        padding="40px 10px 10px"
        backgroundColor="rgba(255, 255, 255, 0.7)"
      >
        <Image
          width="150px"
          display="block"
          margin="0 auto"
          src={activeManufacturer?.logo}
          alt={activeManufacturer?.name}
        />
        <Typography
          as="h3"
          color="black"
          marginTop="5px"
          marginBottom="0"
          fontWeight="bold"
          textAlign="center"
        >
          {title}
        </Typography>
        <FlexBox justifyContent="center" flexWrap="wrap" marginTop="10px">
          {data?.map(({ color, label, isSelected }) => (
            <ColorBox
              key={color}
              color={color}
              label={label}
              isSelected={isSelected}
              onColorBoxClick={() => onColorBoxClick({ color, label, isSelected })}
            />
          ))}
        </FlexBox>
        <Box textAlign="center" margin="20px 10px">
          <Button
            size="large"
            shape="round"
            variant="danger"
            onClick={onBackButtonClick}
            style={{ marginRight: '15px' }}
          >
            <ArrowLeftOutlined /> Back
          </Button>
          <Button shape="round" size="large" variant="primary" onClick={onNextButtonClick}>
            Next <ArrowRightOutlined />
          </Button>
        </Box>
      </Box>
    </HeroWithBackground>
  )
}

ChooseColors.propTypes = {
  color: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ),
  onColorBoxClick: PropTypes.func,
  onBackButtonClick: PropTypes.func,
  onNextButtonClick: PropTypes.func,
  activeManufacturer: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
    isSelected: PropTypes.bool,
  }),
}

export default ChooseColors
