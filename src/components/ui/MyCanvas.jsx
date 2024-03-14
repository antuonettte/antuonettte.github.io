import React, { Suspense, useEffect, useRef } from 'react';
import { Html, KeyboardControls, PointerLockControls, Stats, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Player } from '../3d/Player';
import Scene from '../3d/Scene';
import '../../css/Home.css';
import TextDisplay from '../3d/TextDisplay';
import { useHelper } from '@react-three/drei';
import Instructions from './Instructions';
import Loader from './Loader';


const MyCanvas = () => {

    const Light = ({ ...props }) => {
        const ref = useRef()
        // useHelper(ref, PointLightHelper, 1)

        return <pointLight ref={ref}  {...props} />
    }

    

    return (
        <>
            <Canvas shadows camera={{ fov: 50 }} className='canvas'>

                {/* <Sky sunPosition={[100, 20, 100]} /> */}
                <ambientLight intensity={0.5} />
                <Light intensity={50} position={[0, 3, 0]} />
                <Suspense fallback={<Loader />}>
                    <TextDisplay text={`Projects\n\nClick Me`} scale={[1, 1, 0.2]} position={[0, 1.9, -4.7]} />
                    <TextDisplay text={`  Radio\n\nClick Me`} scale={[1, 1, 0.2]} position={[-0.5, 1.9, 4]} />
                    <Physics gravity={[0, -2, 0]}>
                        <Scene scale={1} />
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
                            <Player />
                        </KeyboardControls>
                    </Physics>
                </Suspense>
                <PointerLockControls selector='#pointerLock'/>
                <Stats />
                <axesHelper />
            </Canvas>
            <Instructions />
        </>


    );
};

export default MyCanvas;
