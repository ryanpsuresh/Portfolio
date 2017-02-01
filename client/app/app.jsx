import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Homepage from './homepage.jsx'

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Homepage} />
  </Router>
);

export default App;
