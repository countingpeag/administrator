import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class AlertDialog extends Component{
  
    handleClose = () =>{
        
        
    };
    handleAgree = () =>{
        
    };

    render(){
        const { openAlert, titleAlert, contentAlert, handleYesResponse, handleNoResponse  } = this.props;

        return(
            <div>
                
                <Dialog
                open={openAlert}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">
                {titleAlert}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {contentAlert}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleYesResponse()} color="secondary">
                    ACEPTAR 
                    </Button>
                    <Button onClick={()=>handleNoResponse()}  color="primary">
                    CANCELAR
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }


}
AlertDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    
};
export default withMobileDialog()(AlertDialog);