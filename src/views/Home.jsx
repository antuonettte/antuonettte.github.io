import React, { Suspense, useEffect, useRef } from 'react';
import { KeyboardControls, PointerLockControls, Sky, Stats, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Player } from '../components/3d/Player';
import Scene from '../components/3d/Scene';
import '../css/Home.css';
import TextDisplay from '../components/3d/TextDisplay';
import { useHelper } from '@react-three/drei';
import { PointLightHelper } from 'three'


const Home = () => {

    const Light = ({...props}) => {
        const ref = useRef()
        // useHelper(ref, PointLightHelper, 1)
      
        return <pointLight ref={ref}  {...props} />
      }

    return (
        <section>
            <div>
                <Stats />
                <KeyboardControls
                    map={[
                        { name: "forward", keys: ["ArrowUp", "w", "W"] },
                        { name: "backward", keys: ["ArrowDown", "s", "S"] },
                        { name: "left", keys: ["ArrowLeft", "a", "A"] },
                        { name: "right", keys: ["ArrowRight", "d", "D"] },
                        { name: "jump", keys: ["Space"] },
                        { name: 'run', keys: ['Shift'] },
                        { name: 'crouch', keys: ['ControlLeft'] }
                    ]}
                >
                    <div className="crosshair" />

                    <Canvas shadows camera={{ fov: 50 }} className='canvas' onKeyDown={(e) => { console.log(e) }}>
                        {/* <Sky sunPosition={[100, 20, 100]} /> */}
                        <ambientLight intensity={0.5} />
                        <Light intensity={50} position={[0,3,0]}/>
                        <Suspense>
                            <TextDisplay text="Test" />
                            <Physics gravity={[0, -2, 0]}>
                                <Scene scale={1} />
                                <Player />
                            </Physics>

                        </Suspense>
                        <PointerLockControls />
                        <axesHelper />
                    </Canvas>
                </KeyboardControls>
            </div>
        </section>
    );
};

export default Home;
