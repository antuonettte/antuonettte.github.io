import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"

const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

export function Player({ lerp = THREE.MathUtils.lerp }) {

    const playerRef = useRef()
    const grounded = useRef(false);
    const [, get] = useKeyboardControls()
    const [targetHeight, setTargetHeight] = useState(0.7); // Target height for smooth transition
    const [height, setHeight] = useState(0.7); // Current height
    const lerpFactor = 0.1; // Adjust this value for smoother or faster transitions


    useFrame((state) => {
        const { forward, backward, left, right, jump, crouch } = get()
        const velocity = playerRef.current.linvel()
        const translation = playerRef.current.translation();
        state.camera.position.set(translation.x, translation.y, translation.z);


        frontVector.set(0, 0, backward - forward)
        sideVector.set(left - right, 0, 0)
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)

        playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
   
        // if (jump && grounded.current) {
        //     playerRef.current.setLinvel({ x: 0, y: 7, z: 0 })
        //     grounded.current = false;
        // }


    })
    return (
        <>
            <RigidBody ref={playerRef} colliders={false} mass={1} type="dynamic" position={[2, 2, 0]} enabledRotations={[false, false, false]} onCollisionEnter={(e) => {

                // if(e.rigidBodyObject.id === "181"){
                //     grounded.current = true
                // }
            }}>
                <CapsuleCollider args={[0.75, height]} />
            </RigidBody>
        </>
    )
}
