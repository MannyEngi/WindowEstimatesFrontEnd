import React from 'react'
import AntdTextArea from 'antd/lib/input/TextArea'

import Input from './index'

const TextArea = React.forwardRef((props, ref) => <Input as={AntdTextArea} ref={ref} {...props} />)

export default TextArea
