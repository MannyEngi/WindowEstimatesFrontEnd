import { colors, radii, addLighteness } from './colors'
import { sizes } from './typography'

const buttonStyles = {
  color: colors.white,
  borderRadius: radii['xs'],
  transition: 'background .2s ease',
  '@media screen and (prefers-reduced-motion: reduce)': {
    transition: 'none',
  },
}

const buttons = {
  primary: {
    ...buttonStyles,
    backgroundColor: colors.primary,
    '&:hover, &:active, &:focus': {
      color: colors.white,
      backgroundColor: addLighteness(colors.primary, 0.9),
    },
  },
  secondary: {
    ...buttonStyles,
    backgroundColor: colors.secondary,
    '&:hover, &:active, &:focus': {
      color: colors.white,
      backgroundColor: addLighteness(colors.secondary, 0.9),
    },
  },
  danger: {
    ...buttonStyles,
    backgroundColor: colors.error,
    '&:hover, &:active, &:focus': {
      color: colors.white,
      backgroundColor: addLighteness(colors.error, 0.9),
    },
  },
}

export const buttonSizes = {
  large: {
    height: '40px',
    lineHeight: '30px',
    fontSize: sizes[2],
  },
  xlarge: {
    height: '50px',
    fontSize: sizes[2],
  },
}

export default buttons
