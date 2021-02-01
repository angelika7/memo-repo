import React from 'react';

import classes from './GameLevel.module.css'

const gameLevel = (props) => {
        return (
             <button 
            className={props.isActive ? [classes.button, classes.active].join(' ') : classes.button } 
            onClick={props.onClick} style={{width: props.width, height: props.height}}>{props.name}{props.text}</button> 
        )
};

export default gameLevel