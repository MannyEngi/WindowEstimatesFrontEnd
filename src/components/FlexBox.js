import React from 'react'

import Box from './Box'

const FlexBox = React.forwardRef((props, ref) => <Box ref={ref} display="flex" {...props} />)

export default FlexBox
