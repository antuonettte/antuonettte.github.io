import { useEffect } from 'react'
import { useGlobalState } from '../../state'
import '../../css/Instructions.css'

export default function Instructions() {
    const { state, dispatch } = useGlobalState();

    const { gameStarted } = state

    function pointerlockchange() {
        dispatch({type: 'SET_GAME_STARTED', payload: !gameStarted})
        // disabling and enabling button after 2 seconds prevents pointerlock error if re-entered to quickly
        if (!gameStarted) {
            document.getElementById('pointerLock').style.visibility = 'hidden'
            setTimeout(() => {
                document.getElementById('pointerLock').style.visibility = 'visible'
            }, 2500)
        }
    }

    useEffect(() => {
        document.addEventListener('pointerlockchange', pointerlockchange, false)
        return () => {
            document.removeEventListener('pointerlockchange', pointerlockchange, false)
        }
    })

    return (
        <div id="instructions" className={gameStarted ? 'hide' : 'show'}>
            <h1>Antonio's Portfolio</h1>
            <p>Explore my Work!</p>
            <kbd>W</kbd>&nbsp;<kbd>A</kbd>&nbsp;<kbd>S</kbd>&nbsp;<kbd>D</kbd> to move
            <br />
            <kbd>SPACE</kbd> to jump.
            <br />
            <br />
            <button
                id="pointerLock"
                onClick={async (e) => {
                    
                }}>
                Click To start
            </button>
        </div>
    )
}