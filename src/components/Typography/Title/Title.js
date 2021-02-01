import React from 'react';

import classes from './Title.module.css';

const title = (props) => {
    return (
    <React.Fragment>
        <p className={`${classes.title} ${props.hello ? classes.hello : ''}`}>{props.title}</p>
    </React.Fragment>    
    );
};

export default title