import React from 'react';
import '../css/Home.css';
import MyCanvas from '../components/ui/MyCanvas';


const Home = () => {
    return (
        <>
            <div className="crosshair" />
            <MyCanvas />
        </>
    );
};

export default Home;
