import React, { useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";


export default function TvStand({ ...props }) {
    const tableRef = useRef()

    const gltf = useLoader(GLTFLoader, 'assets/tv_stand.glb');

   

    return ( 
            <primitive ref={tableRef} object={gltf.scene} {...props} />

    )
}