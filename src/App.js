import React from 'react';
import decode from 'jwt-decode'; //npm install jwt-decode
import{ BrowserRouter,
        Route,
        Switch,
        Redirect } from 'react-router-dom';//npm install react-router-dom
import Profile from './components/Profile';
import StudentValidation from './components/StudentValidation';
import Statistics from './components/Statistics';
import News from './components/Home';
import File from './components/File';
import Login from './components/Login';
import Logout from './components/Logout/Logout';
import Management from './components/Management';
import './index.css';

const checkAuth =() =>  {
    const tokenAuth = localStorage.getItem('tokenAuth');
    if(!tokenAuth){
        //the token is not exist
        return false;
    }
    try {
      const exp = decode(tokenAuth);
      if (exp < new Date().getTime()/1000){  
        //the token has expired 
        return false;
      }
    } catch (e) {
      return false;
    }
    //if all it's ok:
    return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to = {{ pathname: '/' }} />
        )     
      )} />
)

const App = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/"     render={props => <Login {...props}/>}/>
                <AuthRoute exact path="/home" component={News}/>
                <AuthRoute exact path="/profile" component={Profile}/>
                <AuthRoute exact path="/validation" component={StudentValidation}/>
                <AuthRoute exact path="/statistics" component={Statistics}/>
                <AuthRoute exact path="/file" component={File}/>
                <AuthRoute exact path="/logout" component={Logout}/>
                <AuthRoute exact path="/management" component={Management} />
            </Switch>
        </BrowserRouter>
    )
  }

export default App;
