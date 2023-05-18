import React, { useRef } from 'react'

import Shirt from './Shirt'
import { useSnapshot } from 'valtio';
import state from '../store';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';

const CamerRig = ({ children }) => {

  const group = useRef();
  const snap = useSnapshot(state);

  // this hook allows you to execute code on every render frame
  useFrame((state,delta) => {
    const isBreakPoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-0.5, 0, 2];
    if(snap.intro) {
      if (isBreakPoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if(isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })



  return <group ref={group}>{children}</group>
  
}

export default CamerRig