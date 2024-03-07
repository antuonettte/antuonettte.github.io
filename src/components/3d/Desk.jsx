import React, { useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, Wireframe } from '@react-three/drei';


export default function Desk({ ...props }) {
    const deskRef = useRef()

    const gltf = useLoader(GLTFLoader, 'assets/table.glb');

   

    return (
        <>
            <primitive ref={deskRef} object={gltf.scene} {...props} />
            
        </>

    )
}