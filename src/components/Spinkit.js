import React from 'react'
import { useTheme } from '@emotion/react'
import {
  Wave as BRSWave,
  Pulse as BRSPulse,
  Circle as BRSCircle,
  CubeGrid as BRSCubeGrid,
  ThreeBounce as BRSThreeBounce,
  ChasingDots as BRSChasingDots,
  FoldingCube as BRSFoldingCube,
  DoubleBounce as BRSDoubleBounce,
  FadingCircle as BRSFadingCircle,
  WanderingCubes as BRSWanderingCubes,
  RotatingPlane as BRSRotatingPlane,
} from 'better-react-spinkit'

function SpinkitHOC(SpinnerComponent) {
  function Wrapper({ color = 'primary', ...props }) {
    const theme = useTheme()
    return <SpinnerComponent color={theme.colors[color] || color} {...props} />
  }

  return Wrapper
}

const Wave = SpinkitHOC(BRSWave)
const Pulse = SpinkitHOC(BRSPulse)
const Circle = SpinkitHOC(BRSCircle)
const CubeGrid = SpinkitHOC(BRSCubeGrid)
const ThreeBounce = SpinkitHOC(BRSThreeBounce)
const ChasingDots = SpinkitHOC(BRSChasingDots)
const FoldingCube = SpinkitHOC(BRSFoldingCube)
const DoubleBounce = SpinkitHOC(BRSDoubleBounce)
const FadingCircle = SpinkitHOC(BRSFadingCircle)
const RotatingPlane = SpinkitHOC(BRSRotatingPlane)
const WanderingCubes = SpinkitHOC(BRSWanderingCubes)

export default {
  Wave,
  Pulse,
  Circle,
  CubeGrid,
  FoldingCube,
  ThreeBounce,
  ChasingDots,
  DoubleBounce,
  FadingCircle,
  RotatingPlane,
  WanderingCubes,
}
