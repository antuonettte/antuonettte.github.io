import React, { useRef, useState } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useGlobalState } from '../../state';
import audio from '../../assests/elevator music.mp3'

export default function Radio({ ...props }) {
    const { state, dispatch } = useGlobalState();
    const { musicPlaying } = state
    const radioRef = useRef()
    const audioRef = useRef()
    let [music] = useState(new Audio(audio))

    const gltf = useLoader(GLTFLoader, 'assets/radio.glb');

    const handleRadio = () => {
        if(musicPlaying){
            console.log('pausing music')
            music.pause()
            dispatch({type:'SET_MUSIC_PLAYING', payload: false})
        }else{
            console.log('playing music')
            music.play()
            dispatch({type:'SET_MUSIC_PLAYING', payload: true})
        }

    }

    return ( 
        <>
            <primitive onClick={handleRadio} ref={radioRef} object={gltf.scene} {...props} />
        </>

    )
}