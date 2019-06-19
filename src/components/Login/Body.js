import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Redirect } from 'react-router-dom';
import Unauthorized from './Unauthorized';
import { connect } from 'react-redux';
import '../../styles/LoginStyle.css';

class Body extends Component{
    
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }

        this.clicked = this.clicked.bind(this);
    }
    
    handleChange = event => {
        if(event.target.id==="username")
        this.setState({username: event.target.value});
    else
        this.setState({password: event.target.value});
    }

    clicked(){
        const {username, password} = this.state;
        const admin = {
            adminUsername: username,
            adminPassword: password
        }

        //execute the dispatch to make the request(the request is done inside of index.js in actions folder)
        this.props.login(admin);
    }
    

    render(){
       return(
            <Grid>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <TextField
                            id="username"
                            label="Usuario"
                            type="text"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <TextField
                            id="password"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <br/>
                        <br/>                        
                        <Button variant="contained" color="primary" onClick={this.clicked} >
                            Iniciar sesíon
                        </Button>
                        <Unauthorized //if the credentials are incorrect failure is true and the emergent window is open
                            open={this.props.failure}
                            content='Su usuario ó contraseña no son validos, Intente de nuevo!'
                        />
                    </Col>
                </Row>
                {
                    //if the credencials are correct success is true and the app is redrect to the home page
                    this.props.success && <Redirect to={'/home'}/>
                }
            </Grid>
        );
    }
}

//this method is going to inject the global state to the component as failure and success
const mapStateToProps = state => (
    {
        failure: state.loginFailure,
        success: state.loginSuccess
    }
);

//connect injects "mapStateToProps" to Body component/
export default connect(mapStateToProps, null)(Body); 