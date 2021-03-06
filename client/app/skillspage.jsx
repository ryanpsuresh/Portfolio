import React from 'react';
import Video from 'react-html5video';
import { Link } from 'react-router';
import { RouteTransition } from 'react-router-transition';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Skillspage = () => (
  <RouteTransition
    pathname={`/skillspage`}
    atEnter={{ translateX: -100 }}
    atLeave={{ translateX: 100 }}
    atActive={{ translateX: 0 }}
    mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}>
    <div className="skillsbg">
      <div className="container" id="skills">
        <Link className="btn btn-default homebutton" to='/'>Home</Link>
        <div className="skillsheader">
          <h1>SKILLS</h1> 
        </div>
        <div className='row'>
          <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder'>
            <ul className="skillList">
              <h4><i className="fa fa-book fa-3x"></i> <span className='headers'>Languages</span></h4>
              <li>JavaScript</li>
              <li>React Native</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
          </div>
          <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder'>
            <ul className="skillList">
              <h4><i className="fa fa-skyatlas fa-3x"></i> <span className='headers'>Frameworks</span></h4>
              <li>React.js</li>
              <li>Redux</li>
              <li>AngularJS</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>D3.js</li>
              <li>Backbone.js</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder'>
            <ul className="skillList">
              <h4><i className="fa fa-wrench fa-3x"></i> <span className='headers'>Tools</span></h4>
              <li>Git</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Webpack</li>
              <li>Jasmine</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-centered holder'>
            <ul className="skillList">
              <h4><i className="fa fa-plus fa-3x"></i> <span className='headers'>Additional</span></h4>
              <li>Scrum methodology</li>
              <li>Sketch wireframing</li>
              <li>Adobe Photoshop</li>
              <li>Visual Studio</li>
              <li>Asana</li>
              <li>Trello</li>
            </ul>
          </div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-centered holder'>
            <ul className="skillList">
              <h4><i className="fa fa-graduation-cap fa-3x"></i> <span className='headers'>Education</span></h4>
              <li>Brown University</li>
              <li>Hack Reactor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </RouteTransition>

);

export default Skillspage;