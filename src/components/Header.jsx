import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
          <h1><span className='Reading'>Where Reading</span></h1>
          <h1><span className='breach'>Breaches</span></h1>
          <h1><span className='imagine'>Imagination!</span></h1>
          <br/>

          <p className='details'>
            {/* <ul>
              <li>#Tips which improves your reading</li>
            </ul> */}

            <a href='#' className='cv-btn'>Get Started</a>
          </p>
        </div>
    </div>

    
  )
}

export default Header;
