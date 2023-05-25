import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { Decal, useGLTF, useTexture } from '@react-three/drei';

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
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
            />
          )}
          {snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
            />
          )}
        </mesh>
    </group>
  )
}

export default Shirt