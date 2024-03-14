import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    const { progress } = useProgress()
    //console.log(progress, item, loaded, total)
    document.getElementById('instructions').style.display = 'block'
    return (
        <Html center >
            <div className='loader' id="progress">{Math.floor(progress)} % loaded</div>
        </Html>
    )
}

export default Loader