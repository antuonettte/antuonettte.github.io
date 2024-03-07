import React, { useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, Wireframe } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';


const OfficeChair = ({ ...props }) => {
    const deskRef = useRef()

    const gltf = useLoader(GLTFLoader, 'assets/office_chair.glb');

   

    return (
            <primitive ref={deskRef} object={gltf.scene} {...props} />

    )
}

export default OfficeChair