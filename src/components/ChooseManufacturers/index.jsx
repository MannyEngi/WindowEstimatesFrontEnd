import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import { ArrowRightOutlined } from '@ant-design/icons'

import ManufacturerCard from './ManufacturerCard'
import HeroWithBackground from '../HeroWithBackground'
import { Box, Button, FlexBox, Typography } from '@components'

const ChooseManufacturers = ({
  title,
  manufacturers,
  isNextButtonEnable,
  onNextButtonClick,
  onManufacturerClick,
}) => {
  return (
    <HeroWithBackground>
      <Box
        maxWidth="580px"
        borderRadius="xs"
        padding={{ xs: '50px 30px', md: '50px' }}
        backgroundColor="rgba(255, 255, 255, 0.7)"
      >
        <Typography
          as="h2"
          fontWeight="bold"
          textAlign="center"
          marginBottom="40px"
          lineHeight={{ xs: '40px', md: '0' }}
        >
          {title}
        </Typography>
        <Row gutter={[24, 24]}>
          {manufacturers.map(({ name, logo, isSelected }) => (
            <Col sm={12} xs={24} key={name}>
              <ManufacturerCard
                name={name}
                logo={logo}
                isSelected={isSelected}
                onManufacturerClick={() => onManufacturerClick({ name, logo, isSelected })}
              />
            </Col>
          ))}
        </Row>
        <Box textAlign="center" marginTop="24px">
          <Button
            size="large"
            shape="round"
            variant="primary"
            onClick={onNextButtonClick}
            disabled={!isNextButtonEnable}
          >
            Next <ArrowRightOutlined />
          </Button>
        </Box>
      </Box>
    </HeroWithBackground>
  )
}

ChooseManufacturers.propTypes = {
  title: PropTypes.string,
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ),
  isNextButtonEnable: PropTypes.bool,
  onNextButtonClick: PropTypes.func,
  onManufacturerClick: PropTypes.func,
}

export default ChooseManufacturers
