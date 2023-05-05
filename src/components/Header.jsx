import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
          <h1><span>"Reading gives us someplace to go </span>when we have to stay where we are."</h1>
          <p className='details'>
            <ul>
              <li>#Tips which improves your reading</li>
            </ul>

            <ol>
              <li>Set reading goals</li>
              <li>Eliminate distractions</li>
              <li>Practice active reading</li>
              <li>Read regularly</li>
              <li>oin a book club</li>
              <li>Take breaks</li>
            </ol>

            <a href='#' className='cv-btn'>Download</a>
          </p>
        </div>
    </div>
  )
}

export default Header;
