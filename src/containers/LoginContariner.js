import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Body from '../components/Login/Body';
import { login } from '../actions';

class BodyContainer extends Component{

    constructor(){
        super();
        this.handleLogin = this.handleLogin.bind(this);
    }

    //This function is actived by the Body component 
    handleLogin(admin){
        this.props.login(admin);
    }

    render(){
        return(
            //We pass the handleLogin method by props
            <Body login={this.handleLogin}/>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        login: value => dispatch(login(value))
    }
);

//connect injects mapDispatchToProps funtion to the BodyContainer component
export default connect(null, mapDispatchToProps)(BodyContainer);