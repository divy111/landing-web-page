import React from 'react';
import Header from './components/Header';
// import headerimage from './images/header.png';
import Feature from './components/Feature';
import About from './components/About';
import aboutimage from './images/about.png';
import Presentation from './components/Presentation';
import presentationimage from'./images/chat.jpg';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
       <Header /> 
      <Feature/>
      <About image={aboutimage} title='Comes with all you need' button='GET THE APP'/>
      <Presentation image={presentationimage} title='Comes with all you need'/>
      <Contact/>
    </div>
  );
}

export default App;
