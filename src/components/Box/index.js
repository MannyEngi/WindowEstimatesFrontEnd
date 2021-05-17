import styled from '@emotion/styled'
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop'
import {
  space,
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  typography,
} from 'styled-system'
import extraConfig from './config'

export const systemProps = compose(
  layout,
  color,
  space,
  grid,
  position,
  background,
  border,
  shadow,
  flexbox,
  typography,
  extraConfig
)

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'cursor',
  'objectFit',
  'transform',
  'animation',
  'visibility',
  'transition',
  'textTransform',
  'pointerEvents',
  'textDecoration',
  'transformOrigin',
  'objectPosition',
])

/*
  support html native attributes
*/
const nativeHTMLPropAlias = ['htmlType', 'htmlWidth', 'htmlHeight']

const Box = styled('div', {
  shouldForwardProp: (prop) => {
    if (nativeHTMLPropAlias.includes(prop)) {
      return true
    } else {
      return shouldForwardProp(prop)
    }
  },
})(systemProps)

export default Box
