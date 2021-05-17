import React from 'react'
import PropTypes from 'prop-types'

import FlexBox from './FlexBox'

const HeroWithBackground = ({ children }) => {
  return (
    <FlexBox
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      minHeight="calc(100vh - 60px)"
      padding={{ xs: '15px', md: '50px 15px' }}
      background="url('./images/bg.jpg') no-repeat"
      backgroundSize={{ xs: 'cover', xl: '100%' }}
      backgroundAttachment="fixed"
    >
      {children}
    </FlexBox>
  )
}

HeroWithBackground.propTypes = {
  children: PropTypes.node,
}

export default HeroWithBackground
