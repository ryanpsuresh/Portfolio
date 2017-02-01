import React from 'react';
import Video from 'react-html5video';
import { Carousel, CarouselItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { React_Boostrap_Carousel } from 'react-boostrap-carousel';
const mp4 = require('../public/video.mp4');

const App = () => {

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

return (
  <div>
    <Video autoPlay muted loop>
      <source src={mp4} type="video/mp4"/> Your browser does not support the video tag. 
    </Video>
      <div className="container valign-wrapper" id="header">
        <div className="jumbotron">
        <div className='col s12'>
        <div className='page-icons'>
          <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <a className="btn btn-default" href="https://github.com/ryanpsuresh" >Home</a>
            <a className="btn btn-default" href="https://github.com/ryanpsuresh" >Projects</a>
            <a className="btn btn-default" href="https://github.com/ryanpsuresh" >Skills</a>
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

}

export default App;

// <ul>
//           <li><a href="https://github.com/ryanpsuresh" target="_blank"><i className="fa fa-suitcase fa-4x"></i></a></li>
//           <li><a href="https://github.com/ryanpsuresh" target="_blank"><i className="fa fa-home fa-4x"></i></a></li>
//           <li><a href="https://github.com/ryanpsuresh" target="_blank"><i className="fa fa-cogs fa-4x"></i></a></li>
//           </ul>