import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const ModelLoader = ({url, handleClick, ...props}) => {
const gltf = useLoader(GLTFLoader, url);
  const ref = useRef();
  const [hovered, setHovered] = useState(false);


  useFrame(() => {
    // Rotate the model
    ref.current.rotation.y += 0.01;
  });

  return (
    <RigidBody ref={ref} type="static">
      <mesh
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
        <primitive object={gltf.scene} />
      </mesh>
    </RigidBody>
  );
};

export default ModelLoader;
