import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout';
import Memo from './components/Memo/Memo';
import Register from './containers/Register/Register';
import Logout from './containers/Register/Logout/Logout';
import * as actions from './store/actions/index';

import NewResContext from './context/newRes-context';

class App extends Component {
  state = {
    isNew: false,
  }
  
  commponentDidMount() {
    this.props.onTryAutoSignUp();
  }

  isNewHandler = () => {
    this.setState({isNew: true});

    setTimeout(() => {
      this.setState({isNew: false});
    }, 40);

  }

  render () {
    let routes = (
      <Switch>
        <Route path="/register" component={Register} />
        <NewResContext.Provider value={{isNew: this.isNewHandler}}>
          <Route path="/" exact component={() => <Memo />} />
        </NewResContext.Provider>
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <NewResContext.Provider value={{isNew: this.isNewHandler}}>
            <Route path="/" exact component={() => <Memo />} />
          </NewResContext.Provider>
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <React.Fragment>
        <Layout newRes={this.state.isNew}>
            {routes}
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch( actions.authCheckState() )
  }
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
