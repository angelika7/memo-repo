import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from './../../components/Input/Input';
import Login from './../../components/Buttons/Login/Login';
import Btn from './../../components/Buttons/GameLevel/GameLevel';
import * as actions from './../../store/actions/index';

import classes from './Register.module.css';

class Register extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Twój adres email'
                },
                value: '',
                validation: {
                    require: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Hasło'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        isSignUp: true
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if(rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };

        this.setState({controls: updatedControls})
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp );
    }

    logRegisterHandler = () => {
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp};
        });
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map( element => (
            <Input
                key={element.id}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                invalid={!element.config.valid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                changed={( event ) => this.inputChangedHandler( event, element.id )} />

            ) );

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <div className={[classes.error, classes.showError].join(' ')}>
                    <p className={classes.errorMessage}><span>Wystąpił błąd:</span> {this.props.error.message}<span>. Spróbuj jeszcze raz.</span></p>
                </div>
            );
        }

        if (this.props.isAuthenticated) {
            <Redirect to={this.props.authRedirectPath}/>
        }

        let name = null;
        let text = null;

        {this.state.isSignUp ? name='Zaloguj się' : name='Zarejestruj się'}
        {this.state.isSignUp ? text='Zarejestruj się' : text='Zaloguj się'}
        

        return (
            <div className={classes.formBox}>
                {errorMessage}
                <form className={classes.form} onSubmit={this.submitHandler}>
                    {form}
                    <Login name={name}/>
                </form>
                <Btn name={text} width= '700px' height= '75px' onClick={this.logRegisterHandler} />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignUp ) => dispatch( actions.auth( email, password, isSignUp ) ),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Register);