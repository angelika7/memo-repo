import React, { Component } from 'react';
import ModalBox from './../../containers/ModalBox/ModalBox'; 
import Button from './../../components/Buttons/Button/Button';
import classesBtn from './../../components/Buttons/Button/Button.css';

import classes from './withErrorHandler.css'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
            show: true
        }
        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })

            axios.interceptors.response.use(null, error => {
                this.setState({error: error})
            })
        }

        hideBox = () => {
            this.setState({show: false})
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
            
        render() {
            return (
                <React.Fragment>
                    {this.state.error ? 
                        <div className={`${classes.Box} ${!this.state.show ? classes.Hide : ''}`}>
                            <div className={classes.ErrBox}>
                            <ModalBox> 
                                {this.state.error.message}
                            <Button src={'/public/images/close2.svg'} onClick={this.hideBox}/> 
                            </ModalBox>
                            </div>
                        </div> : null}
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
    
}

export default withErrorHandler