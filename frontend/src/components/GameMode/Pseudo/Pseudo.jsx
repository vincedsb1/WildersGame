import React from 'react';

const Pseudo = () => {
    return (
        <div className = "pseudo">
            <p>Your name</p>
            <br />
            <input type="text" id="name" required maxlength= "16"/>
        </div>
    );
};

export default Pseudo;