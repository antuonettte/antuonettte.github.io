import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"

const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player({ lerp = THREE.MathUtils.lerp }) {

    const playerRef = useRef()
    const grounded = useRef(false);
    const [, get] = useKeyboardControls()


    useFrame((state) => {
        const { forward, backward, left, right, jump } = get()
        const velocity = playerRef.current.linvel()
        const translation = playerRef.current.translation();
        state.camera.position.set(translation.x, translation.y, translation.z);


        frontVector.set(0, 0, backward - forward)
        sideVector.set(left - right, 0, 0)
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)

        playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })

        if (jump) {
            playerRef.current.setLinvel({ x: 0, y: 7, z: 0 })
            grounded.current = false;
        }


    })
    return (
        <RigidBody ref={playerRef} gravityScale={9.8} colliders={false} type="dynamic" position={[2, 1, 0]} enabledRotations={[false, false, false]} onCollisionEnter={(e) => {
            // console.log(e.rigidBodyObject)
            if (e.rigidBodyObject.id === 73) {
                // console.log('grounded')
                grounded.current = true
            }
        }}>
            <mesh>
                <CapsuleCollider args={[1.2, 0.5]} />
            </mesh>
        </RigidBody>
    )
}
