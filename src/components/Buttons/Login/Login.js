import React from 'react';

import classes from './Login.module.css'

const login = (props) => {
    return (
        <button className={classes.button} style={{width: props.width, height: props.height}} onClick={props.startGame}>{props.name}</button>
    );
};

export default login