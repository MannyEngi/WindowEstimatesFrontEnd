import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'

import FrameCard from './FrameCard'
import { Box, Image, Button, FlexBox, Typography, HeroWithBackground } from '../'

const ChooseFrameType = ({
  title,
  data,
  onFrameClick,
  onBackButtonClick,
  onNextButtonClick,
  activeManufacturer,
}) => {
  return (
    <HeroWithBackground>
      <Box
        width="100%"
        maxWidth="470px"
        borderRadius="xs"
        padding={{ xs: '50px 30px', md: '50px' }}
        backgroundColor="rgba(255, 255, 255, 0.7)"
      >
        <Image
          width="150px"
          display="block"
          margin="0 auto"
          src={activeManufacturer?.logo}
          alt={activeManufacturer?.nam}
        />
        <Typography
          as="h3"
          color="black"
          marginTop="5px"
          marginBottom="0"
          fontWeight="bold"
          textAlign="center"
        >
          {title}
        </Typography>
        <Row gutter={24}>
          {data?.map(({ name, image, isSelected }) => (
            <Col xs={24} sm={12} key={name}>
              <FrameCard
                name={name}
                image={image}
                isSelected={isSelected}
                onFrameClick={() => onFrameClick({ name, image, isSelected })}
              />
            </Col>
          ))}
        </Row>
        <Box textAlign="center" margin="10px">
          <Button
            size="large"
            shape="round"
            variant="danger"
            onClick={onBackButtonClick}
            style={{ marginRight: '15px' }}
          >
            <ArrowLeftOutlined /> Back
          </Button>
          <Button shape="round" size="large" variant="primary" onClick={onNextButtonClick}>
            Next <ArrowRightOutlined />
          </Button>
        </Box>
      </Box>
    </HeroWithBackground>
  )
}

ChooseFrameType.propTypes = {
  color: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ),
  onFrameClick: PropTypes.func,
  onBackButtonClick: PropTypes.func,
  onNextButtonClick: PropTypes.func,
  activeManufacturer: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
    isSelected: PropTypes.bool,
  }),
}

export default ChooseFrameType
