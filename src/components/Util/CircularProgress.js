import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
});

class ProgressComponent extends Component{
    render(){
        const { classes, size } = this.props;
        return(
                <CircularProgress size={size} className={classes.buttonProgress} />
        );
    }
}

export default withStyles(styles)(ProgressComponent);