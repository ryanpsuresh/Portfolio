import React from 'react';
import Video from 'react-html5video';
import { Link } from 'react-router';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const mp4 = require('../public/video.mp4');

const Homepage = () => (
  <div>
    <Video autoPlay muted>
      <source src={mp4} type="video/mp4"/> Your browser does not support the video tag. 
    </Video>
      <div className="container valign-wrapper" id="header">
        <div className="jumbotron">
        <div className='col s12'>
        <div className='page-icons'>
          <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <Link className="btn btn-default link" href="https://github.com/ryanpsuresh" >Home</Link>
            <Link className="btn btn-default link" href="https://github.com/ryanpsuresh" >Projects</Link>
            <Link className="btn btn-default link" href="https://github.com/ryanpsuresh" >Skills</Link>
        </div>
        </div>
        </div>
          <div className="col s12">
            <h1>Ryan Suresh</h1>
          </div>
          <div className="col s12">
            <h2>Software Engineer</h2> 
          </div>
          <div className="col s12">
          <div className="icons">
            <ul>
              <li><a href="https://github.com/ryanpsuresh" target="_blank"><i className="fa fa-github fa-2x"></i></a></li>
              <li><a href="https://linkedin.com/in/ryansuresh" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a></li>
              <li><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="ryanpsuresh@gmail.com"><i className="fa fa-envelope-o fa-2x"></i></a></li>
              <li><a href="https://www.dropbox.com/s/008ig7drzwckqjl/Resume.pdf?dl=0" target="_blank"><i className="fa fa-id-card fa-2x"></i></a></li>
            </ul>
          </div>
          </div>
        </div>
    </div>
  </div>

);

export default Homepage;
