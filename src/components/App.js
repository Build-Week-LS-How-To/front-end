import React from 'react';
import { Route, Switch } from 'react-router-dom'

// UTILS
import PrivateRoute from '../utils/PrivateRoute'

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss'

// COMPONENTS
import Navigation from './Navigation/Navigation'
import HomePage from './Home/Home'
import Login from './Login/Login'
import CreateAccount from './CreateAccount/CreateAccount'
import Dashboard from './Dashboard/Dashboard'
import AllHacks from './Hacks/AllHacks';
import Hack from './Hacks/Hack';
import MeetTeam from './MeetTeam/MeetTeam';
import EditHackForm from './Dashboard/EditHackForm';
import MySingleHack from './Dashboard/MySingleHack';
import MyHacksCard from './Dashboard/MyHacksCard';

import {
  Container
} from 'reactstrap'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Container>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/create-account" component={ CreateAccount } />
            <Route exact path='/meetteam' component={MeetTeam} />
            <Route exact path='/edithack/:id' component={EditHackForm} />
            <PrivateRoute exact path="/dashboard" component={ Dashboard } />
            {/* <Route exact path = '/singlehack/:id' component={MySingleHack} /> */}
            {/* <Route exact path = '/myhack/:id' component={MyHacksCard} /> */}
            <Route exact path="/hacks" component={ AllHacks } />
            <Route path="/hacks/:id" component={ Hack } />
          </Switch>
        </Container>
    </div>
  );
}

export default App;
