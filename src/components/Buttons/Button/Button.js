import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    return (
        <button className={[classes.button, props.faded].join(' ')} onClick={props.onClick}>
            <img className={classes.img} src={props.src} alt={props.alt}/>
            <p className={classes.text}>{props.text}</p>
        </button>
    );
};

export default button