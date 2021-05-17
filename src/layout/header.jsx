import PropTypes from 'prop-types'

import MenuItems from './MenuItems'
import { Image, FlexBox, Button } from '@components'

const Header = ({ onSignInClick }) => {
  return (
    <FlexBox
      as="header"
      height="60px"
      alignItems="center"
      paddingHorizontal="20px"
      justifyContent="space-between"
    >
      <Image maxHeight="35px" src="./images/logo.png" alt="Window Estimates" />
      <FlexBox alignItems="center">
        <MenuItems />
        <Button size="large" onClick={onSignInClick}>
          Sign In
        </Button>
      </FlexBox>
    </FlexBox>
  )
}

Header.defaultProps = {}

Header.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
}

export default Header
