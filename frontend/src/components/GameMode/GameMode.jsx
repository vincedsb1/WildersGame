import React from 'react';
import Pseudo from './Pseudo/Pseudo';
import Difficulty from './Difficulty/Difficulty';
import { Link } from "react-router-dom";

const GameMode = ({setMode}) => {
    return (
        <div className ="gameMode">
            <h1>Wilder</h1>
            <h1>&nbsp;&nbsp;Game</h1>
           <Pseudo/>
           <Link to="/countdown">
           <Difficulty setMode={setMode}/> 
           </Link>
        </div>
    );
};

export default GameMode;