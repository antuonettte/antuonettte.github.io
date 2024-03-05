import { MeshCollider, RigidBody } from '@react-three/rapier'
import React from 'react'
import ModelLoader from './ModelLoader'

function Scene(props) {
    return (
        <RigidBody {...props} type="fixed" colliders="trimesh">
            <MeshCollider url={"assets/vr_gallery4k.glb"}/>
            <ModelLoader url={"assets/vr_gallery4k.glb"} position={[0, 0, 0]}></ModelLoader>
        </RigidBody>
    )
}

export default Scene