import Link from 'next/link'

import { FlexBox, PseudoBox } from '@components'

const MENU = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Upload',
    path: '/upload',
  },
  {
    label: 'Orders',
    path: '/orders',
  },
  {
    label: 'About Us',
    path: '/about-us',
  },
]

const MenuItems = ({}) => {
  return (
    <FlexBox>
      {MENU.map(({ label, path }) => (
        <Link key={path} href={path}>
          <PseudoBox
            as="a"
            color="black"
            fontSize="1rem"
            marginRight="20px"
            transition="0.5s"
            _hover={{
              color: 'primary',
            }}
          >
            {label}
          </PseudoBox>
        </Link>
      ))}
    </FlexBox>
  )
}

export default MenuItems
