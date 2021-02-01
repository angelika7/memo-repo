import React, { Component } from 'react';
import Button from './../../Buttons/Button/Button';

import classes from './ClockDisplay.module.css';
import Input from './../../Input/Input';
import classesBtn from './../../Buttons/Button/Button.module.css';
import closeBtn from './../../../assets/images/close2.svg';

import NewResContext from './../../../context/newRes-context';

class ClockDisplay extends Component {
    state = {
        show: true,
    }
    
    static contextType = NewResContext;

    hideBox = () => {
        this.setState({show: false})
    }

    render() {
        const { endMemo } = this.props;
        return (
            <React.Fragment>
                {endMemo ? <div className={`${classes.background} ${!this.state.show ? classes.hide : ''}`}>
                    <Button src={closeBtn} onClick={() => {
                        this.props.saveRes(); this.hideBox(); this.context.isNew()}} faded={classesBtn.fadedEffect}/>
                    <div className={[classes.winBox, classes.popupEffect].join(' ')}>
                        <p className={classes.text}>Gratulacje!</p>
                        <p className={classes.info}>Poziom: <span style={{fontWeight: '700'}}>{this.props.level ? 'ŁATWY' : 'TRUDNY'}</span></p>
                        <p className={classes.info}>Wygrana! Twój wynik to: <span className={classes.timeResult}>{this.props.stopTime}</span></p>
                        <Input placeholder='Wpisz swoje imię' changed={this.props.changed}/>
                    </div>
                </div> :
                <span className={classes.clock}>
                    {this.props.time}
                </span>}
            </React.Fragment>
        )
    }
    
};

export default ClockDisplay