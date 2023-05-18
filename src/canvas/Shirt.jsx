import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useGLTF, useTexture } from '@react-three/drei';

const Shirt = () => {

    const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);
    
  return (
    <group>
        <mesh
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.lambert1} 
            // lambert1 is type of material
            material-roughness={1}
            dispose={null}
        >

        </mesh>
    </group>
  )
}

export default Shirt