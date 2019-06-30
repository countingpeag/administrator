import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import decode from 'jwt-decode';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { characterSize } from './../Util/Validations';
import { connect } from 'react-redux';

class ChangePassword extends React.Component {

    constructor(){
        super();
        this.state={
          oldPassword: '',
          newPassword: ''
        }
    }

    handleSubmit = () => {
      const { oldPassword, newPassword } = this.state;
      const adminObj = decode(localStorage.getItem('tokenAuth'));
      const obj = {
        password: oldPassword,
        newPassword,
        rfc: adminObj.rfc
      }

      if(characterSize(oldPassword, 8, 12) && characterSize(newPassword, 8, 12))
        this.props.changed(obj);
    }

    handleClickOpen = () => {
      this.props.willChange(true);
    };

    handleClose = () => {
      this.props.willChange(false);
    };

    handleChange = event => {
      const { id, value } = event.target;
      switch(id){
        case 'oldPassword':
          this.setState({oldPassword: value});
          break;
        case 'newPassword':
          this.setState({newPassword: value});
          break;
        default:
          break;
      }
    }

    render() {
      return (
        <div>
          <Button color="primary" onClick={this.handleClickOpen}>Cambiar Contraseña</Button>
          <Dialog
            open={this.props.willChangePassword}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Cambiar Contraseña</DialogTitle>
            <DialogContent>
              <Grid fluid>
                <Row>
                  <Col xs={12} md={6}>
                    <TextField
                      id="oldPassword"
                      label="Contraseña"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.handleChange}
                    />
                  </Col>
                  
                  <Col xs={12} md={6}>
                    <TextField 
                      id="newPassword"
                      label="Nueva contraseña"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSubmit} color="primary">
                Aceptar
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}

const mapStateToProps = state => (
  {
    willChangePassword: state.willChangePassword,
    changedPassword: state.changedPassword
  }
);

export default connect(mapStateToProps,null)(ChangePassword);