import React from 'react';
import { Nav } from './components/Nav';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import MissionList from './components/MissionList';
import RocketsContainer from './components/RocketsList/RocketContainer';
import LaunchesContainer from './components/Launches/LaunchesContainer';

function App() {
  return (
    <Router>
      <div >
        <div className="background"></div>
        <Nav />
        <Switch>
          <Route path='/' exact >
            <Header />
            <div className="Details">
              <MissionList />
              <RocketsContainer />
            </div>
          </Route>
          <Route path='/launches'>
            <LaunchesContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
