import React from 'react';

function Presentation(props) {
  return (
    <div id='presentation'>
        <div className='presentation-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='presentation-text'>
            <h2>{props.title}</h2>
            <p>Real-time chat: Allow users to communicate with each other in real-time. This could be implemented using a chat window where users can type and send messages to each other.

Group chat: Allow users to create and join groups where they can discuss specific topics or books. This can help facilitate more focused discussions and make it easier for users to find like-minded readers.

Notifications: Allow users to receive notifications when someone sends them a message or when someone posts a new message in a group they have joined. This can help keep users engaged with the chat and make sure they don't miss any important conversations.

Book clubs: Allow users to create and join book clubs where they can read and discuss books together. This can be a great way for users to form more meaningful connections with each other and explore new books.</p>
           


        </div>
    </div>
  )
}

export default Presentation;