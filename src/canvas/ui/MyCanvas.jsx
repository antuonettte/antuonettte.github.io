import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { OrbitControls, TransformControls, KeyboardControls, useHelper, Loader, PointerLockControls, PerspectiveCamera } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react'
import Model from '../components/Model';
import * as THREE from 'three'
import { useControls } from 'leva'
import BaseCharacter from './BaseCharacter';


function Lights() {
    const ambientRef = useRef()
    const directionalRef = useRef()
    const pointRef = useRef()
    const spotRef = useRef()

    // useControls('Ambient Light', {
    //     visible: {
    //         value: false,
    //         onChange: (v) => {
    //             ambientRef.current.visible = v
    //         },
    //     },
    //     color: {
    //         value: 'white',
    //         onChange: (v) => {
    //             ambientRef.current.color = new THREE.Color(v)
    //         },
    //     },
    // })

    useControls('Directional Light', {
        visible: {
            value: false,
            onChange: (v) => {
                directionalRef.current.visible = v
            },
        },
        position: {
            x: 1,
            y: 1,
            z: 1,
            onChange: (v) => {
                directionalRef.current.position.copy(v)
            },
        },
        color: {
            value: 'white',
            onChange: (v) => {
                directionalRef.current.color = new THREE.Color(v)
            },
        },
    })

    // useControls('Point Light', {
    //     visible: {
    //         value: false,
    //         onChange: (v) => {
    //             pointRef.current.visible = v
    //         },
    //     },
    //     position: {
    //         x: 2,
    //         y: 0,
    //         z: 0,
    //         onChange: (v) => {
    //             pointRef.current.position.copy(v)
    //         },
    //     },
    //     color: {
    //         value: 'white',
    //         onChange: (v) => {
    //             pointRef.current.color = new THREE.Color(v)
    //         },
    //     },
    // })

    // useControls('Spot Light', {
    //     visible: {
    //         value: false,
    //         onChange: (v) => {
    //             spotRef.current.visible = v
    //         },
    //     },
    //     position: {
    //         x: 3,
    //         y: 2.5,
    //         z: 1,
    //         onChange: (v) => {
    //             spotRef.current.position.copy(v)
    //         },
    //     },
    //     color: {
    //         value: 'white',
    //         onChange: (v) => {
    //             spotRef.current.color = new THREE.Color(v)
    //         },
    //     },
    // })

    return (
        <>

            <directionalLight ref={directionalRef} />

        </>
    )
}



const MyCanvas = ({ children }) => {
    const Light = ({ type, color, intensity, position }) => {
        const dirLight = useRef();
        useHelper(dirLight, THREE.PointLightHelper, 10, "red");
        return (
            <>
                <pointLight color={color} intensity={intensity} ref={dirLight} position={position} />
            </>
        );
    };

    

    return (



        <>
            <Canvas shadows  >

                <OrbitControls />
                <color attach="background" args={["black"]} />
                <ambientLight intensity={0.6} />
                <TransformControls>
                    <Light type="pointlight" color="orange" intensity="3000" position={[-106, 60, -4]}></Light>
                </TransformControls>

                <Physics gravity={[0, -9.8, 0]}>

                    

                    <RigidBody type="fixed" colliders="trimesh">
                        <Model />
                    </RigidBody>

                </Physics>

                <gridHelper />
                <axesHelper />
            </Canvas>
            <Loader />
        </>
    )
}



export default MyCanvas