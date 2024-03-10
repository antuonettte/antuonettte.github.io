import { RigidBody } from '@react-three/rapier'
import React from 'react'
import Room from './Room'
import Desk from './Desk'
import OfficeChair from './OfficeChair'
import Computer from './Computer'
import { useNavigate } from 'react-router-dom'

function Scene(props) {

    const navigate = useNavigate()
    const handleClick = () => {
        // navigate('/projects')
        const newWindow = window.open('/projects', 'Antonio Turner Projects', 'noopener,noreferrer')
        // if (newWindow) newWindow.opener = null
    }

    return (
        <>
            <RigidBody {...props} type="fixed" colliders="trimesh">
                <Room position={[0, 0, 0]} />
                <Desk position={[0, 0.46, -4.9]} rotation={[0, -1.55, 0]} />
                <Computer handleClick={handleClick} position={[0, 0.95, -5]} />
                <OfficeChair position={[0, 0.31, -4]} rotation={[0, Math.PI, 0]} />

            </RigidBody>
        </>

    )
}


export default Scene