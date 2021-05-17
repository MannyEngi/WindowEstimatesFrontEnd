import React from 'react'
import PropTypes from 'prop-types'

import theme from '@theme'
import checked from '@animation/checked.json'
import { Image, FlexBox, Lottie } from '@components'

const ManufacturerCard = ({ name, logo, isSelected, onManufacturerClick }) => {
  return (
    <FlexBox
      border="1px"
      width="100%"
      height="70px"
      padding="15px"
      borderRadius="sm"
      cursor="pointer"
      alignItems="center"
      borderColor="primary"
      justifyContent="space-between"
      onClick={onManufacturerClick}
      backgroundColor={
        isSelected ? theme.addLighteness(theme.colors['primary'], '0.4') : 'transparent'
      }
      transition="0.5s"
    >
      <Image width="130px" src={logo} alt={name} />
      {isSelected && (
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: checked,
          }}
          width="30px"
        />
      )}
    </FlexBox>
  )
}

ManufacturerCard.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  isSelected: PropTypes.bool,
  onManufacturerClick: PropTypes.func,
}

export default ManufacturerCard
