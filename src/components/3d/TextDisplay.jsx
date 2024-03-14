import { extend, useFrame } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from '../../assests/Roboto_Regular.json'
import { Center, Html, Text3D } from '@react-three/drei'
import { useRef } from 'react'


extend({ TextGeometry })

const TextDisplay = ({text, scale, position}) => {

  const textRef = useRef()
  useFrame((state, delta) => {
    // Rotate the group around the Y-axis
    textRef.current.rotation.y += 0.5 * delta;
  });

  return (
    <group position={position}>
      
      <Center ref={textRef} >
        <Text3D
          font={myFont}
          lineHeight={0.5}
          size={0.1}
          scale={scale}
        >
          {text}
          <meshLambertMaterial attach='material' color={'gray'} />
        </Text3D>
      </Center>
    </group>





  )
}

export default TextDisplay