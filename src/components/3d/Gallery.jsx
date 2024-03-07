import React, { useRef } from "react";
import { Wireframe, useGLTF } from "@react-three/drei";

const Gallery = (props) => {
  const { nodes, materials } = useGLTF("/assets/vr_gallery.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.382}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[430, 430, 1290]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Gallery_Structure_0.geometry}
              material={materials.Structure}
            >
                
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Gallery_Backwall_0.geometry}
              material={materials.Backwall}
            ></mesh>
            <group
              position={[-1.73, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.062, 0.186, 0.186]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Benches_Benches_0.geometry}
                material={materials.Benches}
              ></mesh>
              
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Benches_Chrome_0.geometry}
                material={materials.Chrome}
              />
            </group>
            <group
              position={[-0.978, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.233, 0.233, 0.419]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Portraits_PaintingFrame_0.geometry}
                material={materials.PaintingFrame}
              />
              {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Portraits_Portraits_0.geometry}
                material={materials.Portraits}
              /> */}
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Podiums_Podiums_0.geometry}
              material={materials.Podiums}
              position={[-1.803, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.078, 0.233, 0.233]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default Gallery