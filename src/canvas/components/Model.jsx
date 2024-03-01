import React, { useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function Model(props) {
  
  const gltf = useLoader(GLTFLoader, "/models/midieval.glb");

  return (
    <primitive  object={gltf.scene} scale={1} position={[40,-40,0]}/>
  )
}

