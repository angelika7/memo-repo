import React from 'react';

import { Link } from 'react-router-dom';
import GameLevel from '../Buttons/GameLevel/GameLevel'
import ModalBox from '../../containers/ModalBox/ModalBox'
import cats from './../../assets/images/cats.svg';

import classes from './Auth.module.css';


const auth = (props) => {
    return (
        <div className={`${classes.container} ${props.isClicked || props.isAuth ? classes.hide : ''}`}>
            <img className={classes.img} alt='' src={cats}></img>
            <div className={classes.content}>
                <ModalBox title="Witaj w MemoCats App" hello={true}
                    bgColor= "rgba(var(--color-yellow-light-3), .85)"
                >
                    <div className={classes.authBox}>
                        <Link to="/register"><GameLevel width= '400px' height= '75px' onClick={props.clicked} name='Logowanie/Rejestracja' /></Link>
                        <Link to="/"><GameLevel width= '400px' height= '75px' onClick={props.clicked} name='Graj jako gość' /></Link>
                    </div>
                </ModalBox>
            </div>
        </div>
    );
};

export default auth