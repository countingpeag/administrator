import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Redirect } from 'react-router-dom';
import logoNucleus from '../images/logoTest.png';
import '../styles/NavBarStyle.css';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  sectionMobileHide: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sectionMobileShow: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
});

class NavBar extends Component{

    constructor(){
        super();
        this.state = {
            option: '',
            mobileButton: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleMobileMenuOpen = event => {
      this.setState({ mobileButton: event.currentTarget });
    };
  
    handleMobileMenuClose = () => {
      this.setState({ mobileButton: null });
    };

    //This method set the option to the state to know which option the user selected
    handleClick(event){
        const {id} = event.currentTarget;

        switch(id){
          case 'home':
            this.setState({option : id});
            break;
          case 'file':
            this.setState({option : id});
            break;
          case 'statistics':
            this.setState({option : id});
            break;
          case 'management':
            this.setState({option : id});
            break;
          case 'profile':
            this.setState({option : id});
            break;
          case 'logout':
            this.setState({option : id});
            break;
          default:
            break;
        }
    }

    //this method will decide which componente will be rendered
    toRender(){
        const {option} = this.state;

        switch(option){
          case 'home':
            return <Redirect to={{pathname: '/home'}} />;
          case 'file':
            return <Redirect to={{pathname: '/file'}} />;
          case 'statistics':
            return <Redirect to={{pathname: '/statistics'}} />;
          case 'management':
            return <Redirect to={{pathname: '/management'}} />;
          case 'profile':
            return <Redirect to={{pathname: '/profile'}} />;
          case 'logout':
            return <Redirect to={{pathname: '/logout'}} />;
          default:
            break;
        }
    }

    render(){
      const { classes } = this.props;
      const { mobileButton } = this.state;
      const isMobileMenuOpen = Boolean(mobileButton);

      //This is the menu taht apears when the screen is "sm"
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileButton}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMobileMenuClose}
        >
          <MenuItem id="home" onClick={this.handleClick}>
            <p>Inicio</p>
          </MenuItem>
          <MenuItem id="file" onClick={this.handleClick}>
            <p>Cargar</p>
          </MenuItem>
          <MenuItem id="statistics" onClick={this.handleClick}>
            <p>Estadisticas</p>
          </MenuItem>
          <MenuItem id="management"  onClick={this.handleClick}>
            <p>Gestion</p>
          </MenuItem>
          <MenuItem id="profile"  onClick={this.handleClick}>
            <p>Perfil</p>
          </MenuItem>
          <MenuItem id="logout" onClick={this.handleClick}>
            <p>Salir</p>
          </MenuItem>
        </Menu>
      );  

        return (
            <div className="root">
            
            <AppBar position="static" color="primary">
                <Toolbar>

                <Typography variant="title" color="inherit" className="grow">
                    <img className="iconNavBar" src={logoNucleus} title="Nucleus" alt="nucleus"/>
                </Typography>

                
                <div className={classes.sectionMobileHide}>
                  <Button color="inherit" id="home" onClick={this.handleClick}>Inicio</Button>
                  <Button color="inherit" id="file" onClick={this.handleClick}>Cargar</Button>
                  <Button color="inherit" id="statistics" onClick={this.handleClick}>Estadisticas</Button>
                  <Button color="inherit" id="management"  onClick={this.handleClick}>Gestion</Button>
                  <Button color="inherit" id="profile"  onClick={this.handleClick}>Perfil</Button>
                  <Button color="inherit" id="logout" onClick={this.handleClick}>Salir</Button>
                </div>
                {/*This part is show when the screen is size "sm"*/}
                <div className={classes.sectionMobileShow}>
                  <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MenuIcon  />
                  </IconButton>
                </div>
                </Toolbar>
                {renderMobileMenu}
            </AppBar>
            {
                this.toRender()
            }
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);