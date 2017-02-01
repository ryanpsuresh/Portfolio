import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Homepage from './homepage.jsx'
import Skillspage from './skillspage.jsx'

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/skillspage" component={Skillspage} />
  </Router>
);

export default App;
