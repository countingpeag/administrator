
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '@material-ui/core/Avatar';
import { failure } from '../../actions/index';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const styles = {
    colorRed:{
        padding: 5,
        backgroundColor: red[600],
    }	    
}

class Unauthorized extends Component {

    handleClose = () => {
        //execute failure action to change the global state to false and close the emergent window
        this.props.onClose(false);
    };
    
   render(){
    // we recive the content and the state by props
    const { classes, open, content, ...other } = this.props;
        return(
            <Dialog
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            open={open}
            {...other}>
                <DialogTitle id="alert-dialog-title">
                            <Grid fluid>
                                <Row middle="xs">
                                        <Col xs={3} >
                                            <Avatar className={classes.colorRed}>
                                                <MaterialIcon icon="close" size="large" color="#FFFFFF"/>    
                                            </Avatar>
                                        </Col>
                                        <Col xs={9} >
                                        Acceso denegado    
                                        </Col>
                                </Row>
                            </Grid>
                </DialogTitle>
                <DialogContent>
                    {
                        content //we recieve the text by props
                    }
                </DialogContent>
                <DialogActions>
                    <Button  color="primary" onClick={this.handleClose} autoFocus>
                    Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

//this method contain the action to change the global state to false
const mapDispatchToProps = dispatch => (
    {
        onClose: value => dispatch(failure(value))
    }
);

//We injects styles for the icon and extra funtionality to the component by mapDispatchToProps
export default withStyles(styles)( connect(null, mapDispatchToProps)(Unauthorized) );