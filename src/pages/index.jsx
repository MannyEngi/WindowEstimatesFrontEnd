import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import {
  ChooseColors,
  WindowDetails,
  ChooseFrameType,
  AnotherManufacturer,
  ChooseManufacturers,
} from '@components'
import { MANUFACTURERS, FRAMES, COLORS, MEASUREMENTS } from '@data'

const Index = () => {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [colors, setColors] = useState(COLORS)
  const [frames, setFrames] = useState(FRAMES)
  const [manufacturers, setManufacturers] = useState(MANUFACTURERS)
  const [activeManufacturer, setActiveManufacturer] = useState(null)
  const [choosedManufacturers, setChoosedManufacturers] = useState([])

  const [windowMeasurements, setWindowMeasurements] = useState([
    { quantity: 1, room: '', opening: null, width: '', height: '', glass: null },
    { quantity: 1, room: '', opening: null, width: '', height: '', glass: null },
    { quantity: 1, room: '', opening: null, width: '', height: '', glass: null },
    { quantity: 1, room: '', opening: null, width: '', height: '', glass: null },
  ])

  useEffect(() => {
    if (manufacturers.length > 0) {
      const data = manufacturers.filter(({ isSelected }) => isSelected === true)
      setChoosedManufacturers(data)
    }
  }, [manufacturers])

  return (
    <div>
      {step === 1 && (
        <ChooseManufacturers
          manufacturers={manufacturers}
          title="Choose Manufacturer's"
          onNextButtonClick={() => setStep(2)}
          isNextButtonEnable={choosedManufacturers.length > 0}
          onManufacturerClick={(manufacturer) => {
            setActiveManufacturer(manufacturer)
            setManufacturers((_manufacturers) => {
              return _manufacturers.map((_manufacturer) => {
                if (_manufacturer.name === manufacturer.name) {
                  return {
                    ..._manufacturer,
                    isSelected: !_manufacturer.isSelected,
                  }
                }
                return {
                  ..._manufacturer,
                  isSelected: false,
                }
              })
            })
          }}
        />
      )}
      {step === 2 && (
        <ChooseColors
          title="Choose the Colors"
          onBackButtonClick={() => setStep(1)}
          onNextButtonClick={() => setStep(3)}
          data={colors[activeManufacturer?.name]}
          activeManufacturer={activeManufacturer}
          onColorBoxClick={({ color }) => {
            const selectedColors = colors[activeManufacturer?.name].map((_color) => {
              if (_color.color === color) {
                return {
                  ..._color,
                  isSelected: true,
                }
              }
              return {
                ..._color,
                isSelected: false,
              }
            })
            // set colors
            setColors((colors) => ({
              ...colors,
              [activeManufacturer?.name]: selectedColors,
            }))
          }}
        />
      )}
      {step === 3 && (
        <ChooseFrameType
          title="Choose frame type"
          onBackButtonClick={() => setStep(2)}
          onNextButtonClick={() => setStep(4)}
          data={frames[activeManufacturer?.name]}
          activeManufacturer={activeManufacturer}
          onFrameClick={({ name }) => {
            const selectedFrames = frames[activeManufacturer?.name].map((_frame) => {
              if (_frame.name === name) {
                return {
                  ..._frame,
                  isSelected: true,
                }
              }
              return {
                ..._frame,
                isSelected: false,
              }
            })
            // set frames
            setFrames((frames) => ({
              ...frames,
              [activeManufacturer?.name]: selectedFrames,
            }))
          }}
        />
      )}
      {step === 4 && (
        <WindowDetails
          title="Enter Details"
          glass={MEASUREMENTS.glass}
          opening={MEASUREMENTS.opening}
          onBackButtonClick={() => setStep(3)}
          windowMeasurements={windowMeasurements}
          choosedManufacturers={choosedManufacturers}
          onNextButtonClick={({ measurements }) => {
            setStep(5)
            setWindowMeasurements(measurements)
          }}
        />
      )}
      {step === 5 && (
        <AnotherManufacturer
          onYesButtonClick={() => setStep(1)}
          choosedManufacturers={choosedManufacturers}
          onNoButtonClick={() => router.push('estimate')}
          title="Would you like another comparison quote?"
        />
      )}
    </div>
  )
}

export default Index
