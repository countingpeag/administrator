import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { success, setLogin } from '../../actions';

//When the component is call, it clear up the localstorage, change the global state and redirect to the login component
class Logout extends Component{
    render(){
    localStorage.clear();
    this.props.logout(false);
    this.props.progressOff(false);
        return(
                <Redirect to="/"/>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        logout: value => dispatch(success(value)),
        progressOff: value => dispatch(setLogin(value))
    }
);

//connect injects "maDispatchToProps" to Logout component
export default connect(null, mapDispatchToProps)(Logout)