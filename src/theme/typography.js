export const sizes = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2.25rem',
  '3rem',
]

const fontWeights = {
  light: 100,
  normal: 300,
  medium: 500,
  bold: 700,
}

const typography = {
  letterSpacings: {
    normal: '0',
    wide: '0.025em',
    widest: '0.1em',
    tight: '-0.025em',
    tighter: '-0.05em',
  },
  lineHeights: {
    none: '1',
    base: '1.5',
    taller: '2',
    tall: '1.625',
    short: '1.375',
    shorter: '1.25',
    normal: 'normal',
  },
  fontWeights,
  sizes,
  fonts: {
    SofiaPro: "'Sofia Pro', sans-serif",
  },
  typeSizes: {
    h1: {
      fontSize: sizes[8],
    },
    h2: {
      fontSize: sizes[7],
    },
    h3: {
      fontSize: sizes[6],
    },
    h4: {
      fontSize: sizes[5],
    },
    h5: {
      fontSize: sizes[4],
    },
    h6: {
      fontSize: sizes[3],
    },
    p: {
      fontSize: sizes[2],
    },
  },
  fontSizes: {
    caption: '0.75rem',
    tiny: '.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
}

export default typography
