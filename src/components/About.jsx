import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Welcome to our novel web app, the perfect destination for book lovers! Our app offers a wide range of features designed to enhance your reading experience. From a vast library of books to choose from to personalized recommendations based on your reading history, our app has everything you need to discover and enjoy your next great read. You can track your reading progress, leave reviews, and connect with other readers in our vibrant community. Whether you're looking for the latest bestseller or an old classic, our novel web app has something for everyone. Join us today and start exploring the world of books like never before!</p>
            <button>{props.button}</button>
        </div>

    </div>
  )
}

export default About;