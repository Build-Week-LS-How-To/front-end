import React from 'react';
import { Route, Switch } from 'react-router-dom'

// COMPONENTS
import Navigation from './Navigation/Navigation'
import HomePage from './Home/Home'
import Login from './Login/Login'
import CreateAccount from './CreateAccount/CreateAccount'

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/create-account" component={ CreateAccount } />
        </Switch>
    </div>
  );
}

export default App;
