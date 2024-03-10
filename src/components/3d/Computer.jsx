import React from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  useLoader } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import '../../css/Projects.css'
import { useNavigate } from 'react-router-dom';


const Computer = ({ position, handleClick, ...props }) => {
    const gltf = useLoader(GLTFLoader, 'assets/computer.glb');

    // const navigate = useNavigate()

    // const handleClick = () => {
    //     navigate('/projects')
    // }

    return (
            <primitive  onClick={handleClick} object={gltf.scene} position={position} {...props} />
    )
}

export default Computer