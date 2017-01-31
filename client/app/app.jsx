import React from 'react';
import Video from 'react-html5video';
const mp4 = require('../public/video.mp4');

const App = () => (
  <div>
  <Video autoPlay muted loop>
    <source src={mp4} type="video/mp4"/> Your browser does not support the video tag. 
  </Video>
  <div class="container valign-wrapper" id="header">
      <div class="row valign center-align">
        <div class="col s12">
          <h1>Ryan Suresh</h1></div>
        <div class="col s12">
          <h3>Software Engineer</h3> </div>
        <div class="col s12">
          <div class="icons">
            <ul>
              <li><a href="https://github.com/ryanpsuresh" target="_blank"><i class="fa fa-github fa-2x"></i></a></li>
              <li><a href="https://linkedin.com/in/ryansuresh" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a></li>
              <li><a class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="ricochenx@gmail.com"><i class="fa fa-envelope-o fa-2x"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
);

export default App;