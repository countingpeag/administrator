import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BodyContainer from '../../containers/LoginContariner';
import ProgressCompoenent from '../Util/ProgressComponent';
import { connect } from 'react-redux';
import logoNucleus from '../../images/logoTest.png';
import '../../styles/LoginStyle.css';

class Login extends Component{

    //this component will render the BodyContainer component which receive some extra functionality
    render(){
        return(
            <Grid>
                <Col xs={12}>
                   <Row center="xs">
                        <Col className="body" xs={10} md={3}>
                            <img className="iconLogin" src={logoNucleus} title="nucleus" alt="nucleus"/>
                            <BodyContainer />
                        </Col>
                    </Row>
                    <Row center="xs"> 
                        <Col className="footer" xs={10} md={3}>
                            @2018 nucleus
                        </Col>
                    </Row>
                    <Row>
                        <ProgressCompoenent status={this.props.loginStatus}/>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

const mapStateToProps = state => (
    {
        loginStatus: state.login
    }
);

export default connect(mapStateToProps, null)(Login);