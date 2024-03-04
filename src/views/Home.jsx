import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import React, { useEffect } from 'react'
import { Player } from '../components/3d/Player'
import '../css/Home.css'
import Scene from '../components/3d/Scene'

const Home = () => {

    useEffect(()=>{
        const canvas = document.getElementById('canvas')
    })

    
    return (
        <section >


            <div>
                <KeyboardControls
                    map={[
                        { name: "forward", keys: ["ArrowUp", "w", "W"] },
                        { name: "backward", keys: ["ArrowDown", "s", "S"] },
                        { name: "left", keys: ["ArrowLeft", "a", "A"] },
                        { name: "right", keys: ["ArrowRight", "d", "D"] },
                        { name: "jump", keys: ["Space"] },
                        { name: 'run', keys: ['Shift'] },
                        { name: 'crouch', keys: ['ControlLeft']}
                    ]}>
                    <Canvas id='canvas'shadows camera={{ fove: 50 }} className='canvas' onKeyDown={(e)=>{console.log(e)}}>
                        <Sky sunPosition={[100, 20, 100]} />
                        <ambientLight intensity={0.3} />
                        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
                        <Physics gravity={[0, -30, 0]}>
                            <Scene scale={0.1}/>
                            
                            <Player />
                        </Physics>
                        <PointerLockControls />
                    </Canvas>
                </KeyboardControls>
            </div>
        </section>
    )
}

export default Home