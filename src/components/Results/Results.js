import React from 'react';
import classes from './Results.module.css';

let results = (props) => (
    <li className={classes.result}><span className={classes.time}>{props.time}</span>, Poziom - <span style={{color: 'var(--color-yellow-dark3', fontWeight: '700'}}>{props.level ? 'Łatwy' : 'Trudny'}</span> - {props.name}</li>
);

export default results