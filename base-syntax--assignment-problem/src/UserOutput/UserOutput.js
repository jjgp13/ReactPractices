import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserInput'>
            <p>Username: {props.userName}</p>
            <p>Some other text</p>
        </div>
    );
};

export default userOutput;