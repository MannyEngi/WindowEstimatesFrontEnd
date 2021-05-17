import React from 'react'

import { Box, OrderItem, Typography, HeroWithBackground } from '@components'

const DATA = [
  {
    manufacturer: 'amerimax',
    name: 'Windows and Doors',
    items: 12,
    price: 1296,
    zipCode: '94112',
    jobName: '1234 Castro Street',
    logo: './images/vendors/amerimax.png',
  },
  {
    manufacturer: 'marvin',
    name: 'Windows and Doors',
    items: 12,
    price: 2396,
    zipCode: '94112',
    jobName: '1234 Castro Street',
    logo: './images/vendors/marvin.svg',
  },
]

const Orders = () => {
  return (
    <HeroWithBackground>
      <Box
        width="100%"
        maxWidth="920px"
        borderRadius="xs"
        padding={{ xs: '50px 30px', md: '50px' }}
        backgroundColor="rgba(255, 255, 255, 0.7)"
      >
        <Typography as="h2" textAlign="center" lineHeight="shorter">
          Orders
        </Typography>
        <Box marginTop="15px">
          {DATA.map(({ name, logo, jobName, zipCode, manufacturer, items, price }, i) => (
            <OrderItem
              key={i}
              logo={logo}
              name={name}
              view="orders"
              items={items}
              price={price}
              zipCode={zipCode}
              jobName={jobName}
              manufacturer={manufacturer}
            />
          ))}
        </Box>
      </Box>
    </HeroWithBackground>
  )
}

export default Orders
