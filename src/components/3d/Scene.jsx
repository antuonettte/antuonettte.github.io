import { MeshCollider, RigidBody } from '@react-three/rapier'
import React from 'react'
import ModelLoader from './ModelLoader'

function Scene(props) {
    return (
        <RigidBody {...props} type="fixed" colliders="trimesh">
            <MeshCollider url={"assets/midieval.glb"}/>
            <ModelLoader url={"assets/midieval.glb"} position={[0, -30, 0]}></ModelLoader>
        </RigidBody>
    )
}

export default Scene