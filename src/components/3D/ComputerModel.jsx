import React from 'react'
import { useGLTF } from '@react-three/drei'

const ComputerModel = () => {
    const { scene } = useGLTF('/models/gaming_desktop_pc.glb', true)

    return (
        <primitive
            object={scene}
            scale={0.4} 
            position={[0, -1.5, 0]}
            rotation={[0, -Math.PI/2, 0]}
        />
    )
}

useGLTF.preload('/models/gaming_desktop_pc.glb')

export default ComputerModel