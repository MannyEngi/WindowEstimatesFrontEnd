import styled from '@emotion/styled'
import css from '@styled-system/css'

import Box from './Box'
import { transformAliasProps as tx } from './Box/config'

/**
 * These selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */

const hover = '&:hover'
const focus = '&:focus'
const after = '&:after'
const before = '&:before'
const visited = '&:visited'
const last = '&:last-of-type'
const first = '&:first-of-type'
const odd = '&:nth-of-type(odd)'
const even = '&:nth-of-type(even)'
const checked = '&[aria-checked=true]'
const notLast = '&:not(:last-of-type)'
const notFirst = '&:not(:first-of-type)'
const selected = '&[aria-selected=true]'
const active = '&:active, &[data-active=true]'

const PseudoBox = styled(Box)(
  ({
    _hover,
    _focus,
    _active,
    _visited,
    _first,
    _last,
    _odd,
    _even,
    _after,
    _before,
    _notFirst,
    _notLast,
    _selected,
    _checked,
  }) => {
    return css({
      [odd]: tx(_odd),
      [even]: tx(_even),
      [last]: tx(_last),
      [first]: tx(_first),
      [hover]: tx(_hover),
      [focus]: tx(_focus),
      [after]: tx(_after),
      [before]: tx(_before),
      [active]: tx(_active),
      [visited]: tx(_visited),
      [notFirst]: tx(_notFirst),
      [notLast]: tx(_notLast),
      [selected]: tx(_selected),
      [checked]: tx(_checked),
    })
  }
)

export default PseudoBox
