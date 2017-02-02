import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Homepage from './homepage.jsx'
import Skillspage from './skillspage.jsx'
import Projectspage from './projectspage.jsx'

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/skillspage" component={Skillspage} />
    <Route path="/projectspage" component={Projectspage} />
  </Router>
);

export default App;
