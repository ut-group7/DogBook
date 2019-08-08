import React from "react";
import imageUrl from '../Content/background.jpg';
import './Main.css';

function Main () {
    return (
        <div className='Main-page' style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Recent listings go here</h1>
            
                <h2>A map will go here</h2>
            </div>
        </div>
    )
}

export default Main;