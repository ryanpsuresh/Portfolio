import React from 'react';
import Video from 'react-html5video';
import { Link } from 'react-router';
import { RouteTransition } from 'react-router-transition';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Projectspage = () => (
  <RouteTransition
  pathname={`/projectspage`}
  atEnter={{ translateX: -100 }}
  atLeave={{ translateX: 100 }}
  atActive={{ translateX: 0 }}
  mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
>
  <div className="skillsbg">
      <div className="container" id="skills">
        <div className="row center-align">
          <Link className="btn btn-default homebutton" to='/'>Home</Link>
          <div className="skillsheader">
            <h1>PROJECTS</h1> 
          </div>
          <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder'>
            <ul className="skillList">
              <h4><i className="fa fa-book fa-4x"></i> Languages</h4>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </div>
          <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder'>
            <ul className="skillList">
              <h4><i className="fa fa-skyatlas fa-4x"></i> Frameworks</h4>
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
              <h4><i className="fa fa-database fa-4x"></i> Tools</h4>
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
      </div>
    </div>
</RouteTransition>

);

export default Projectspage;