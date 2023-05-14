import React from 'react';
import Navbar from './Navbar';

function Header () {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
          <h1><span className='Reading'>Where Reading</span></h1>
          <h1><span className='breach'>Breaches</span></h1>
          <h1><span className='imagine'>Imagination!</span></h1>
          <br/>
          {/* <div className='Header-img'>
            <img src={props.image} alt='' />
          </div> */}

            <a href='#' className='cv-btn'>Get Started</a>
        </div>
    </div>

    
  )
}

export default Header;
