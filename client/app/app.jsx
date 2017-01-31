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
        </div>
    </div>
  </div>

);

export default App;