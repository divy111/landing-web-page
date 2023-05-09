import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
          <h1><span className='Reading'>"Reading gives us someplace to go </span> <br/> when we have to stay where we are."</h1>
          <br/>
          <br/>
          <p className='details'>
            {/* <ul>
              <li>#Tips which improves your reading</li>
            </ul> */}

            <ul>
              <li>Set reading goals</li>
              <li>Eliminate distractions</li>
              <li>Practice active reading</li>
              <li>Read regularly</li>
              <li>Join a book club</li>
              <li>Take breaks</li>
            </ul>

            <br/>
            <br/>
            <br/>

            <a href='#' className='cv-btn'>Download</a>
          </p>
        </div>
    </div>

    
  )
}

export default Header;
