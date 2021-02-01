import React from 'react';

import classes from './NewGame.module.css'

const newGame = (props) => {
    return (
        !props.watch && props.showLevels ?
            <button className={classes.button} onClick={props.startGame}>Rozpocznij grę</button>
            : <button className={classes.button} onClick={props.newGame}>Nowa gra</button>
    );
};

export default newGame