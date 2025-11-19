import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ComputerModel from '../3D/ComputerModel'

const Computer = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <ComputerModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default Computer