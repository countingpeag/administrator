import React, { Component } from 'react';
import ChangePassword from '../components/Profile/ChangePassword';
import PropTypes from 'prop-types';
import { willChangePassword, changedPassword } from '../actions';
import { connect } from 'react-redux';

class ChangePasswordContainer extends Component{

    constructor(){
        super();
        this.handleWillChangePassword = this.handleWillChangePassword.bind(this);
        this.handleChangedPassword = this.handleChangedPassword.bind(this);
    }

    handleWillChangePassword(value){
        this.props.willChangePassword(value);
    }

    handleChangedPassword(value){
        this.props.changedPassword(value);
    }
    render(){
        return(
            <ChangePassword willChange={this.handleWillChangePassword} changed={this.handleChangedPassword}/>
        );
    }
}

ChangePasswordContainer.propTypes = {
    willChangePassword: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => (
    {
        willChangePassword: value => dispatch(willChangePassword(value)),
        changedPassword: value => dispatch(changedPassword(value))
    }
);

//connect injects mapDispatchToProps to the ChangePasswordContainer component
export default connect(null, mapDispatchToProps)(ChangePasswordContainer);