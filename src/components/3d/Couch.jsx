import React, { useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";


export default function Couch({ ...props }) {
    const couchRef = useRef()

    const gltf = useLoader(GLTFLoader, 'assets/couch.glb');

   

    return (
        <>
            <primitive ref={couchRef} object={gltf.scene} {...props} />
            
        </>

    )
}