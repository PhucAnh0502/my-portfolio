import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ComputerModel from '../3D/ComputerModel'
import { OrbitControls } from '@react-three/drei'

const Hero = () => {
    return (
        <section 
            className='relative w-full h-screen mx-auto'
            style={{ 
                backgroundImage: `url('/herobg.png')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            
            <div className='relative z-10 h-full flex flex-col'>
                <div className='flex flex-col pt-24 items-start px-8 md:px-20'>
                    <h1 className="text-5xl md:text-8xl font-bold text-white">
                        Hi, I'm{' '}
                        <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Phuc Anh
                        </span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-300">
                        I develop user interfaces and web applications
                    </p>
                </div>

                <div className="absolute bottom-10 w-full flex justify-center">
                    <a href="#about"> 
                        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
                            <div className="w-full h-2 bg-white rounded-full animate-bounce" />
                        </div>
                    </a>
                </div>
            </div>

            <div className='absolute inset-0 z-10'>
                <Canvas
                    camera={{ position: [0, 2, 10], fov: 25 }}
                    gl={{ alpha: true, preserveDrawingBuffer: true }}
                    style={{ background: 'transparent' }}
                    onCreated={({ gl }) => {
                        if (gl && typeof gl.setClearColor === 'function') {
                            gl.setClearColor(0x000000, 0)
                        }
                    }}
                >
                    <Suspense fallback={null}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />
                        <hemisphereLight intensity={1} groundColor="black" />
                        <ComputerModel />
                    </Suspense>
                </Canvas>
            </div>

        </section>
    );
};

export default Hero;