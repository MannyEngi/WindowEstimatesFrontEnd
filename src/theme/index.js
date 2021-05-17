import typography from './typography'
import breakpoints from './breakpoints'
import buttons, { buttonSizes } from './buttons'
import { radii, colors, opacity, borders, shadows, addLighteness } from './colors'

const theme = {
  radii,
  colors,
  opacity,
  borders,
  shadows,
  buttons,
  buttonSizes,
  addLighteness,
  ...typography,
  ...breakpoints,
}

export default theme
