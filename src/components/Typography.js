import React from 'react'
import { useTheme } from '@emotion/react'

import Box from './Box'

const Typography = React.forwardRef(({ as, ...props }, ref) => {
  const { typeSizes } = useTheme()

  return <Box as={as} ref={ref} {...typeSizes[as]} {...props} />
})

Typography.defaultProps = {
  as: 'p',
  color: 'secondary',
  fontFamily: 'Sofia Pro',
}

export default Typography
