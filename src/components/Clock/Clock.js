import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//import * as actions from './../../store/actions/index';
import axios from './../../axios'; 

import ClockDisplay from './ClockDisplay/ClockDisplay';

class Clock extends Component {
    state = {
        running: false,
        endMemo: false,
        stopTime: '',
        name: null, 
        clockTime: 0
    }

    componentDidMount() {
        this.startTimerHandler()
    }

    componentWillUnmount() {
        this.stopTimerHandler()
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.endGame !== this.props.endGame) {
            this.setState({endMemo: true});
            this.stopTimerHandler() 
        }
    }

    tick = () => { 
        this.setState({clockTime: this.state.clockTime + 10})
    }

    startTimerHandler = () => {
        if(!this.state.running) {
            this.setState({running: true});
            this.time = setInterval(() => this.tick(), 10);
        }    
    }

    stopTimerHandler = () => {
        const { clockTime } = this.state;
        let miliseconds = ("0" + (Math.floor(clockTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(clockTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(clockTime / 60000) % 60)).slice(-2);
        let myTime = `${minutes}:${seconds}:${miliseconds}`

        this.setState((state, props) => {
            return { running: false,
            stopTime: myTime }
        }); 
        
        clearInterval(this.time); 
    }

    resetTimerHandler = () => {
        this.setState({
            miliseconds: 0,
            seconds: 0,
            minutes: 0
        })
    }

    inputChangedHandler = (event) => {
        this.setState({name: event.target.value})
    }

    saveEndGameResultHandler = () => {
        const isAuthenticated = this.props.isAuthenticated;
        const ID = this.props.userID;
        let result = {
            time: this.state.stopTime,
            level: this.props.level,
            customer: {
                name: this.state.name,
                id: ''
            }
        }

        if(isAuthenticated) {
            result = {
                time: this.state.stopTime,
                level: this.props.level,
                customer: {
                    name: this.state.name,
                    id: ID
                }
            }
        }

        axios.post('/results.json', result)
            .then(response => response)
            .catch(err => console.log(err));
    }

    render () {
        const { clockTime } = this.state;
        let miliseconds = ("0" + (Math.floor(clockTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(clockTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(clockTime / 60000) % 60)).slice(-2);
        let time = `${minutes}:${seconds}:${miliseconds}`
        
        return ( 
            <React.Fragment>
                <ClockDisplay endMemo={this.state.endMemo} stopTime={this.state.stopTime} time={time} level={this.props.level} saveRes={this.saveEndGameResultHandler} changed={this.inputChangedHandler}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null,
      userID: state.auth.userId
    };
  };

export default withRouter( connect( mapStateToProps)( Clock, axios ) );