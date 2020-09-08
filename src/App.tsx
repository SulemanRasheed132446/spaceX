import React from 'react';
import { Nav } from './components/Nav';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact >
            <Header />
          </Route>
          <Route path='/launches'><p>1</p></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
