import React from 'react'
import PropTypes from 'prop-types'

import checked from '@animation/checked.json'
import { Box, Lottie, PseudoBox, Typography } from '../'

const ColorBox = ({ color, label, isSelected, onColorBoxClick }) => {
  return (
    <Box width="70px" height="70px" margin="10px 10px 15px">
      <PseudoBox
        width="70px"
        height="70px"
        display="flex"
        cursor="pointer"
        borderRadius="sm"
        marginBottom="3px"
        alignItems="center"
        justifyContent="center"
        border="4px solid #fff"
        backgroundColor={color}
        onClick={onColorBoxClick}
        boxShadow="0 0 0 1px rgb(0 0 0 / 10%)"
      >
        {isSelected && (
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: checked,
            }}
            width="35px"
          />
        )}
      </PseudoBox>
      <Typography textAlign="center" fontSize="caption">
        {label}
      </Typography>
    </Box>
  )
}

ColorBox.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  onColorBoxClick: PropTypes.func,
}

export default ColorBox
