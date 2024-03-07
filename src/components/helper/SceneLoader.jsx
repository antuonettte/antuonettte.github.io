import React from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";


export default function SceneLoader({url, ...props}) {
  
  const gltf = useLoader(GLTFLoader, url);
  // const { nodes, materials} = useGLTF()

 

  return (
    <>
    
    <primitive object={gltf.scene} {...props}/>
    </>
  )
}