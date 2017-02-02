import React from 'react';
import Video from 'react-html5video';
import { Link } from 'react-router';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import mp4 from '../public/video.mp4';
import pdf from '../public/resume.pdf';

const Homepage = () => (
  <div>
    <Video autoPlay muted>
      <source src={mp4} type="video/mp4"/> Your browser does not support the video tag. 
    </Video>
    <div className="container valign-wrapper" id="header">
      <div className="jumbotron homepageFrame">
        <div className='col s12'>
          <div className='page-icons'>
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
              <Link className="btn btn-default link" to='/projectspage'>Portfolio</Link>
              <a className="btn btn-default link" href={pdf}>Resume</a>
              <Link className="btn btn-default link" to='/skillspage'>Skills</Link>
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
              <li><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip"><strong>github</strong></Tooltip>}><a href="https://github.com/ryanpsuresh" target="_blank"><i className="fa fa-github fa-2x"></i></a></OverlayTrigger></li>
              <li><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip"><strong>Linkedin</strong></Tooltip>}><a href="https://linkedin.com/in/ryansuresh" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></OverlayTrigger></li>
              <li><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip"><strong>ryanpsuresh@gmail.com</strong></Tooltip>}><a href="mailto:ryanpsuresh@gmail.com" target="_blank"><i className="fa fa-envelope-o fa-2x"></i></a></OverlayTrigger></li>             
              <li><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip"><strong>254-931-5861</strong></Tooltip>}><a target="_blank"><i className="fa fa-id-card fa-2x"></i></a></OverlayTrigger></li>             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Homepage;


