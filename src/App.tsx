import React from 'react';
import { Nav } from './components/Nav';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import MissionList from './components/MissionList';

function App() {
  return (
    <Router>
      <div >
        <Nav />
        <Switch>
          <Route path='/' exact >
            <Header />
            <div className="Details">
              <MissionList />
            </div>
          </Route>
          <Route path='/launches'><p>1</p></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
