import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Image = React.forwardRef(({ src, alt, ...props }, ref) => {
  return <Box as="img" ref={ref} src={src} alt={alt} {...props} />
})

Image.defaultProps = {}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  onError: PropTypes.func,
}

export default Image
