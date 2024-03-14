import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  groundObjects: {},
  actions: {},
//   mixer: new AnimationMixer(),
  gameStarted: false,
  time: 0,
  finished: false,
  musicPlaying: false,
};

// Define reducer function to handle state updates
function reducer(state, action) {
  switch (action.type) {
    case 'SET_GAME_STARTED':
      return { ...state, gameStarted: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    case 'SET_FINISHED':
      return { ...state, finished: action.payload };
    case 'SET_MUSIC_PLAYING':
      return {...state, musicPlaying: action.payload };
    // Add other cases for different state updates as needed
    default:
      return state;
  }
}

// Create context for global state
const GlobalStateContext = createContext();

// Create provider component to wrap around the application
export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Custom hook to access global state and dispatch function
export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}
