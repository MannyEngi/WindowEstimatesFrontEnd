import { Row, Col } from 'antd'
import PropTypes from 'prop-types'

import EstimationForm from './EstimationForm'
import { Box, Image, Typography, PseudoBox, HeroWithBackground } from '..'

const WindowDetails = ({
  title,
  glass,
  opening,
  onNextButtonClick,
  onBackButtonClick,
  windowMeasurements,
  choosedManufacturers,
}) => {
  return (
    <HeroWithBackground>
      <Typography
        as="h2"
        color="white"
        lineHeight="0"
        fontWeight="bold"
        textAlign="center"
        marginBottom="40px"
      >
        {title}
      </Typography>
      <Box width="100%" maxWidth="450px" margin="0 auto">
        <Row gutter={16} justify="center">
          {choosedManufacturers.map(({ logo, name }) => (
            <Col key={name} sm={6} xs={12}>
              <PseudoBox
                width="100px"
                height="50px"
                padding="15px"
                borderRadius="sm"
                marginBottom="20px"
                backgroundColor="#fff"
              >
                <Image width="100%" src={logo} alt={name} />
              </PseudoBox>
            </Col>
          ))}
        </Row>
      </Box>
      <Box
        maxWidth="1210px"
        borderRadius="xs"
        padding={{ xs: '50px 30px', md: '50px' }}
        backgroundColor="rgba(255, 255, 255, 0.7)"
      >
        <EstimationForm
          glass={glass}
          opening={opening}
          onNextButtonClick={onNextButtonClick}
          onBackButtonClick={onBackButtonClick}
          windowMeasurements={windowMeasurements}
        />
      </Box>
    </HeroWithBackground>
  )
}

WindowDetails.propTypes = {
  title: PropTypes.string,
  onBackButtonClick: PropTypes.func,
  onNextButtonClick: PropTypes.func,
  choosedManufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ),
}

export default WindowDetails
