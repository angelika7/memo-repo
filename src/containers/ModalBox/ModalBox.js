import React from 'react';
import Title from './../../components/Typography/Title/Title'

import classes from './ModalBox.module.css';

const modalBox = (props) => {
    return (
        
    <div className={classes.box} style={{backgroundColor: props.bgColor}}>
        <Title title={props.title} hello={props.hello} />
        {props.children}
    </div> 
    );
};

export default modalBox