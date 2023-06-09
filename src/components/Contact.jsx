import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

 
const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        "service_ilwsasp", 
        "template_5fv6zi5", 
        form.current, 
        "wZ9woEKy9WTarPbDq"
        )
      .then
      ((result) => {
          console.log(result.text);
          console.log("message sent");
      }, 
      (error) => {
          console.log(error.text);
      }
      
      );
  };

  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <a href='#' className='send-btn'>Send</a>
  </form>

  </div>
  )
}

export default Contact;
