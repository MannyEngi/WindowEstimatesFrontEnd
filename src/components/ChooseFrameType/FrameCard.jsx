import React from 'react'
import PropTypes from 'prop-types'

import theme from '@theme'
import checked from '@animation/checked.json'
import { Box, FlexBox, Lottie, Typography } from '../'

const FrameCard = ({ name, image, isSelected, onFrameClick }) => {
  const overly = isSelected ? theme.addLighteness(theme.colors['primary'], '0.4') : 'transparent'

  return (
    <Box
      key={name}
      cursor="pointer"
      borderRadius="sm"
      overflow="hidden"
      border="1px solid"
      marginVertical="10px"
      borderColor={isSelected ? 'primary' : '#a0a0a2'}
      onClick={onFrameClick}
    >
      <FlexBox
        width="100%"
        height="150px"
        position="relative"
        justifyContent="center"
        borderBottom="1px solid"
        borderColor={isSelected ? 'primary' : '#a0a0a2'}
        background={`linear-gradient( ${overly}, ${overly}), url(${image})`}
        backgroundSize="100%"
      >
        {isSelected && (
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: checked,
            }}
            width="50px"
            position="absolute"
          />
        )}
      </FlexBox>
      <Typography
        as="h4"
        color="black"
        fontSize="15px"
        marginTop="10px"
        fontWeight="bold"
        textAlign="center"
      >
        {name}
      </Typography>
    </Box>
  )
}

FrameCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  onFrameClick: PropTypes.func,
}

export default FrameCard
