import React from 'react';
import Pseudo from './Pseudo/Pseudo';
import Difficulty from './Difficulty/Difficulty';

const GameMode = () => {
    return (
        <div className ="gameMode">
            <h1>Wilder</h1>
            <h1>&nbsp;&nbsp;Game</h1>
           <Pseudo/>
           <Difficulty/> 
        </div>
    );
};

export default GameMode;