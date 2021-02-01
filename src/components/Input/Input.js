import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let input = null;

    switch (props.elementType) {
        case ('input'): 
        input = <input className={classes.input}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
        break;

        case ('textarea'):
        input = <textarea
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
        break;

    default:
        input = <input
                className={classes.input}
                {...props.elementConfig}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changed} />;

    }

    return (
        <div className={classes.inputForm}>
            <label>{props.label}</label>
            {input}
        </div>
    );
};

export default input