import React from 'react'

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CamerRig from './CamerRig'
import { Canvas } from '@react-three/fiber'
import { Center, Environment } from '@react-three/drei'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CamerRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CamerRig>
    </Canvas>
  )
}

export default CanvasModel