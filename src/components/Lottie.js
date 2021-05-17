import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import lottie from 'lottie-web'

import Box from './Box'

const Lottie = ({ width, height, speed, isPaused, isStopped, options, ...props }) => {
  const element = useRef(null)
  const [lottieOptions, setOptions] = useState(null)
  const [lottieInstance, setLottieInstance] = useState(null)

  //initialise animation
  function init() {
    const {
      loop = true,
      animationData,
      autoplay = true,
      segments = false,
      renderer = 'svg',
      rendererSettings,
    } = options

    setOptions({
      loop,
      autoplay,
      segments,
      renderer,
      rendererSettings,
      container: element.current,
      animationData: animationData,
      ...options,
    })

    // before returning options for new instance destroy the previous instance
    if (lottieInstance) {
      lottieInstance.destroy()
    }
  }

  // recreate the animation if the data changed
  useEffect(() => init(), [options.animationData])

  /* lottie instance */
  useEffect(() => {
    if (lottieOptions && lottieOptions.container) {
      const instance = lottie.loadAnimation(lottieOptions)
      setLottieInstance(instance)
    }
  }, [lottieOptions])

  // animation speed
  useEffect(() => {
    if (lottieInstance && speed) {
      lottieInstance.setSpeed(speed)
    }
  }, [speed, lottieInstance])

  /* lottie container styling */
  const styles = {
    width,
    height,
    ...props,
  }

  return <Box ref={element} style={styles} />
}

Lottie.defaultProps = {
  speed: 1,
  width: '100%',
  height: '100%',
  isPaused: false,
  isStopped: false,
}

Lottie.propTypes = {
  options: PropTypes.shape({
    loop: PropTypes.bool,
    renderer: PropTypes.any,
    autoplay: PropTypes.bool,
    segments: PropTypes.bool,
    animationData: PropTypes.object,
    rendererSettings: PropTypes.object,
  }).isRequired,
  speed: PropTypes.number,
  isPaused: PropTypes.bool,
  isStopped: PropTypes.bool,
  direction: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Lottie
