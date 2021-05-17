import React from 'react'
import PropTypes from 'prop-types'

import { FlexBox, Spinkit, HeroWithBackground, Typography } from './'

const EstimationLoader = ({ title }) => {
  return (
    <HeroWithBackground>
      <FlexBox flexDirection="column" alignItems="center" maxWidth="680px">
        <Spinkit.Circle size={100} color="white" />
        <Typography
          as="h2"
          color="white"
          marginTop="20px"
          textAlign="center"
          lineHeight="normal"
          fontWeight="bold"
        >
          {title}
        </Typography>
      </FlexBox>
    </HeroWithBackground>
  )
}

EstimationLoader.propTypes = {
  title: PropTypes.string,
}

export default EstimationLoader
