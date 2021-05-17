/* [xs, sm, md, lg, xl, xll] */
const breakpoints = ['576px', '768px', '992px', '1200px', '1600px']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]
breakpoints.xll = breakpoints[4]

const responsive = {
  breakpoints,
  /* for css queries */
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
    xll: `@media screen and (min-width: ${breakpoints[4]})`,
  },
}

export default responsive
