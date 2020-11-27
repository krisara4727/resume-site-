import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import Certification from './Certification';
import Instagram from './Instagram';
import Email from './Email';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';

function App() {
  return (

    <Router>
      <Switch>
        <Route path='/insta'><Instagram /></Route>
        <Route path='/email'><Email /></Route>
        <Route path='/linkedIn'><LinkedIn /></Route>
        <Route path='/twitter'><Twitter /></Route>
        <Route path='/certifications'><Certification /></Route>
        <Route path='/works'><Work /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
    </Router>
  )
}

export default App
