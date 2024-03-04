import React from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function ModelLoader({url, ...props}) {
  
  const gltf = useLoader(GLTFLoader, url);

 

  return (
    <primitive  object={gltf.scene} {...props}/>
  )
}