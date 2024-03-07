import React, { useRef } from "react";
import { Wireframe, useGLTF } from "@react-three/drei";

const Room = (props) => {
  const { nodes, materials } = useGLTF("assets/room.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        {/* <Wireframe /> */}
      </mesh>
    </group>
  );
}

export default Room
