import React from 'react';
import Video from 'react-html5video';
import { Link } from 'react-router';
import { RouteTransition } from 'react-router-transition';
import travelAppImage from '../public/TravelApp.png';
import rehjeksImage from '../public/Rehjeks.png';


const Projectspage = () => (
  <RouteTransition
    pathname={`/projectspage`}
    atEnter={{ translateX: -100 }}
    atLeave={{ translateX: 100 }}
    atActive={{ translateX: 0 }}
    mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}>
    <div className="portfoliobg">
      <div className="container">
        <Link className="btn btn-default homebutton" to='/'>Home</Link>
        <div className="portfolioheader">
          <h1>PORTFOLIO</h1> 
        </div>
        <div className='row'>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-centered'>
            <div className='jumbotron portfolioFrame'>
              <div className="card stack">
                <h2 className="card-title">Travel App</h2>
                <img className="card-img-top" src={travelAppImage} alt="Card image cap"/>
                <div className="card-block">
                  <p className="card-text">A one-stop outdoor vacation planner with integrated directions and robust trail data</p>
                  <a href="http://ec2-35-167-66-182.us-west-2.compute.amazonaws.com:8000/#/" className="btn btn-primary portfoliobutton">Website</a>
                  <a href="https://github.com/ryanpsuresh/TravelApp" className="btn btn-primary portfoliobutton pull-right">Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-centered'>
            <div className='jumbotron portfolioFrame'>
              <div className="card stack">
                <h2 className="card-title">RehJeks</h2>
                <img className="card-img-top" src={rehjeksImage} alt="Card image cap"/>
                <div className="card-block">
                  <p className="card-text">A learning based platform designed to help users enhance their regular expression knowledge</p>
                  <a href="https://rehjeks.herokuapp.com/" className="btn btn-primary portfoliobutton">Website</a>
                  <a href="https://github.com/BackAlleyHax/RehJeks" className="btn btn-primary portfoliobutton pull-right">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouteTransition>

);

export default Projectspage;