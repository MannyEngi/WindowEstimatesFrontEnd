import { useState, useEffect } from 'react'

import {
  Box,
  Button,
  OrderItem,
  Typography,
  EstimationLoader,
  HeroWithBackground,
} from '@components'

const DATA = [
  {
    manufacturer: 'amerimax',
    name: 'Windows and Doors',
    items: 12,
    price: 1296,
    logo: './images/vendors/amerimax.png',
  },
  {
    manufacturer: 'marvin',
    name: 'Windows and Doors',
    items: 12,
    price: 2396,
    logo: './images/vendors/marvin.svg',
  },
]

const Estimate = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <EstimationLoader title="Please wait our system is processing your quotes!" />
  }

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
          Your Quotes are complete!
        </Typography>
        <Box marginTop="15px">
          {DATA.map(({ name, logo, manufacturer, items, price }, i) => (
            <OrderItem
              key={i}
              logo={logo}
              name={name}
              items={items}
              price={price}
              manufacturer={manufacturer}
            />
          ))}
        </Box>
        <Box textAlign="center">
          <Button shape="round" size="large" variant="secondary">
            New Quote
          </Button>
        </Box>
      </Box>
    </HeroWithBackground>
  )
}

export default Estimate
