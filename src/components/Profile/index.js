import React, {Component}from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import decode from 'jwt-decode';
import ChangePasswordContainer from '../../containers/ChangePasswordContainer';
import NavBar from '../NavBar';
import '../../styles/ProfileStyle.css';

//This properties does not work in a css file. 
//It is only for avatar component
const styles = {
    avatar: {
      margin: 10,
      color: '#fff',
      width: 100,
      height: 100,
      fontSize: 50,
      backgroundColor: blueGrey[500],
    }
};

class Profile extends Component {

    render(){
        const {classes} = this.props;
        const adminObj = decode(localStorage.getItem('tokenAuth'));
        
        return (
            <div>
                <NavBar />
                <Grid>
                    <Row className="profile">
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={12} sm={12} md={12} lg={12} className="ColumnCenter">
                                    <Avatar className={classes.avatar}>{`${adminObj.adminName[0]}${adminObj.adminLastName[0]}`}</Avatar>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h2>{`${adminObj.adminName} ${adminObj.adminLastName}`}</h2>  
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}> 
                                    <h2>{adminObj.adminUsername}</h2>  
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}> 
                                    <h2>{adminObj.adminRFC}</h2>  
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <ChangePasswordContainer />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

//The first parentheses' content will be injected in the profile component which is in the second parentheses.
export default withStyles(styles)(Profile);