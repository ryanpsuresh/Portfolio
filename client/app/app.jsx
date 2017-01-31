import React from 'react';
import Video from 'react-html5video';
const mp4 = require('../public/video.mp4');

const App = () => (
  <div>
    <Video autoPlay muted loop>
      <source src={mp4} type="video/mp4"/> Your browser does not support the video tag. 
    </Video>
      <div className="container valign-wrapper" id="header">
        <div className="jumbotron">
          <div className="col s12">
            <h1>Ryan Suresh</h1></div>
          <div className="col s12">
            <h3>Software Engineer</h3> 
          </div>
          <div className="col s12">
          <div className="icons">
            <ul>
              <li><a href="https://github.com/ricochen" target="_blank"><i className="fa fa-github fa-2x"></i></a></li>
              <li><a href="https://linkedin.com/in/ricochenx" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a></li>
              <li><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="ricochenx@gmail.com"><i className="fa fa-envelope-o fa-2x"></i></a></li>
              <li><a href="https://github.com/ricochen" target="_blank"><i className="fa fa-id-card fa-2x"></i></a></li>
            </ul>
          </div>
          </div>
        </div>
    </div>
  </div>

);

export default App;