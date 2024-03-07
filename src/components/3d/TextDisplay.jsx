import { extend, useFrame } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from '../../assests/Roboto_Regular.json'
import { Center, Html, Text3D } from '@react-three/drei'
import { useRef } from 'react'

extend({ TextGeometry })

const TextDisplay = () => {

  const textRef = useRef()
  useFrame((state, delta) => {
    // Rotate the group around the Y-axis
    textRef.current.rotation.y += 0.5 * delta;
  });

  return (

    // <group position={[-0.24, 1.9, -4.7]} rotation={[0, 0, 0]} ref={groupRef}>
      <Center ref={textRef} position={[0, 1.9, -4.7]}>
      <Text3D
        font={myFont}
        lineHeight={0.5}
        size={0.1}
        scale={[1, 1, 0.2]}
      >
        {/* <Html>
          <div className="frame">
            Projects
          </div>
        </Html> */}
        {`Projects\n\nClick Me`}
        <meshLambertMaterial attach='material' color={'gray'} />
      </Text3D>
      </Center>

    // </group>



  )
}

export default TextDisplay