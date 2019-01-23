import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

class Progress extends Component{
    render(){
        return(
            <Dialog
                open={this.props.status}
            >
                <DialogContent>
                    <CircularProgress size={70}/>
                </DialogContent>
            </Dialog>
        );
    }
}

export default Progress;