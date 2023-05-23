"use client"
import Image from 'next/image'
import Experience from '../components/Experience.js'
import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <div className="fixed top-0 left-0  w-full h-full overflow-hidden">
        <Canvas
        //turns off auto tonemapping from R3F
        // flat
        shadows
        camera={ {
          fov: 50,
          near: 0.1,
          far: 200,
          position: [1, 1, 6]
        } }
      >
        <Experience />
      </Canvas>
    </div>
  )
}
