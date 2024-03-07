import React, { useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, Wireframe } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';


const Computer = ({ ...props }) => {
    const gltf = useLoader(GLTFLoader, 'assets/computer.glb');

    const handleClick =() =>{
        console.log("clicked")
    }

    return (
        
            <primitive onClick={handleClick} object={gltf.scene} {...props} />
        

    )
}

export default Computer