import React from 'react';

export default function IconSwitch(props) {
    
    const {mode, onSwitch} = props;

    return (
        <span className="material-icons" onClick={onSwitch}> {mode} </span>
    );

}