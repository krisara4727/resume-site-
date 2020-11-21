import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';

function App() {
  return (

    <Router>
      <Switch>
      <Route path='/works'><Work /></Route>
      <Route path='/about'><About /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
    </Router>
  )
}

export default App
