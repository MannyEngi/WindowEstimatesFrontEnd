import Color from 'color'

export const colors = {
  white: '#ffffff',
  primary: '#11928D',
  secondary: '#4B3804',
  silver: '#d9d9d9',
  /* notification */
  info: '#2196f3',
  error: '#f44336',
  default: '#323232',
  success: '#4caf50',
  warning: '#ff9800',
}

export const opacity = {
  0: '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1',
}

export const borders = {
  none: 0,
  '1px': '1px solid',
  '2px': '2px solid',
  '3px': '3px solid',
  '4px': '4px solid',
}

export const radii = {
  none: '0',
  xs: '4px',
  sm: '7px',
  md: '10px',
  lg: '15px',
}

export const shadows = {}

export const addLighteness = (color, opacity) => {
  return Color(color)
    .fade(1 - opacity)
    .rgb()
    .string()
}
