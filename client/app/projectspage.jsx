import React from 'react';
import Video from 'react-html5video';
import { Link } from 'react-router';
import { RouteTransition } from 'react-router-transition';
import travelAppImage from '../public/TravelApp.png';


const Projectspage = () => (
  <RouteTransition
  pathname={`/projectspage`}
  atEnter={{ translateX: -100 }}
  atLeave={{ translateX: 100 }}
  atActive={{ translateX: 0 }}
  mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
>
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
                <h4 className="card-title">Travel App</h4>
                <img className="card-img-top" src={travelAppImage} alt="Card image cap"/>
                <div className="card-block">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-centered'>
          <div className='jumbotron portfolioFrame'>
            <div className="card stack">
            <h4 className="card-title">Travel App</h4>
            <img className="card-img-top" src={travelAppImage} alt="Card image cap"/>
            <div className="card-block">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
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