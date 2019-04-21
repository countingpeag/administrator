import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class CustomButton extends Component {
  render(){
    const { value, color } = this.props;

    const theme = createMuiTheme({
      palette: {
        primary: color,
      },
      typography: {
        useNextVariants: true,
      },
    });

    return (
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
              {value}
          </Button>
        </MuiThemeProvider>
    );
  }
}

export default (CustomButton);